import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';
import { clickOnVisibleElement, waitForVisibleElement, waitForInVisibleElement, regSleep } from "../utility/util";
import { BasePage } from "../pages/base.page";


export class QuickViewPage extends BasePage {

  constructor() {
    super();
  }

  private iframeQuickView = (): ElementFinder => element(by.css('iframe.fancybox-iframe'));
  private add_to_cart = () : ElementFinder => element(by.css('#add_to_cart > button.exclusive'))
  private productBody = (): ElementFinder => element(by.id('product'))
  private nameEle = (parentElement: ElementFinder): ElementFinder => parentElement.element(by.xpath(`//h1[@itemprop='name']`))
  private skuEle = (parentElement: ElementFinder): ElementFinder => parentElement.element(by.xpath(`//span[@itemprop='sku']`))
  private priceEle = (parentElement: ElementFinder): ElementFinder => parentElement.element(by.xpath(`//span[@itemprop='price']`))
  private closeQuickViewPopupIcon = (): ElementFinder => element(by.css('a.fancybox-item.fancybox-close'))

  async addProductToCart(viewType: string): Promise<[string,string,string]> {
    let name,sku,price;
    switch (viewType){
      case "full":
        console.log(`enter addProductToCart in full mode`);
        break;
      case "quick":
        await waitForVisibleElement(this.iframeQuickView());
        browser.switchTo().frame(this.iframeQuickView().getWebElement());
        //Get product info
        await waitForVisibleElement(this.productBody());
        name = (await this.nameEle(this.productBody()).getText()).trim();
        sku = (await this.skuEle(this.productBody()).getText()).trim();
        price = (await this.priceEle(this.productBody()).getText()).trim();
        await clickOnVisibleElement(this.add_to_cart());
        browser.switchTo().defaultContent();
        await waitForInVisibleElement(this.iframeQuickView());
        await regSleep();
        break;
    }
    return [sku,name,price];
  }

  async closeQuickViewPopup(): Promise<void> {
    await waitForVisibleElement(this.iframeQuickView());
    console.log(`found iframeQuickView ... trying to switch to iframe`);
    browser.switchTo().frame(this.iframeQuickView().getWebElement());
    console.log(`done`)
    await clickOnVisibleElement(this.closeQuickViewPopupIcon());
    console.log(`done add_to_cart_quickview... trying to switch back on default`);
    browser.switchTo().defaultContent();
    console.log(`done`)
    return;
  }
}
