import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';
import { clickOnVisibleElement, regSleep, waitForVisibleElement, waitForInVisibleElement } from "../utility/util";
import { BasePage } from "../pages/base.page";


export class CartSummaryPage extends BasePage {

  constructor() {
    super();
  }
  private productsList = () : ElementArrayFinder => element.all(by.css('#cart_summary > tbody > tr.cart_item'))
  private itemName = (parentElement: ElementFinder): ElementFinder => parentElement.element(by.css('p > a'));
  private itemSku = (parentElement: ElementFinder): ElementFinder => parentElement.element(by.css('small.cart_ref'));
  private itemPrice = (parentElement: ElementFinder): ElementFinder => parentElement.element(by.css('span.price > span.price'));

  async getProductsList(): Promise<Map<string,string[]>> {
    let foundProducts = new Map();
    let size = await this.productsList().count();
    for (let i = 0; i < size; i++){
        let name = (await this.itemName(this.productsList().get(i)).getText()).trim();
        let sku = (await this.itemSku(this.productsList().get(i)).getText()).split(':')[1].trim();
        let price = (await this.itemPrice(this.productsList().get(i)).getText()).trim();
        foundProducts.set(sku, [name,price])
      }
    return foundProducts;
  }
}
