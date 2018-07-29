import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';
import { clickOnVisibleElement, regSleep, waitForVisibleElement, waitForInVisibleElement } from "../utility/util";
import { BasePage } from "../pages/base.page";


export class HomePage extends BasePage {

  constructor() {
    super();
  }

  private productList = () : ElementArrayFinder => element.all(by.css('#homefeatured > li'))
  private itemLink = (parentElement: ElementFinder): ElementFinder => parentElement.element(by.css('a.product_img_link > img'));
  private itemName = (parentElement: ElementFinder): ElementFinder => parentElement.element(by.css('a.product-name'));

  async selectItem(viewType: string, opt: string): Promise<void> {
    let selectedProduct;
    let size = await this.productList().count();
    switch (opt){
      case "first":
        selectedProduct = this.productList().first();
        break;
      case "last":
        selectedProduct = this.productList().last();
        break;
    }
    await this.scrollTo(selectedProduct);
    switch (viewType){
      case "full":
        await clickOnVisibleElement(this.itemName(selectedProduct));
        break;
      case "quick":
        await clickOnVisibleElement(this.itemLink(selectedProduct));
        break;
    }
    return;
  }
}
