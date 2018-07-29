import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';
import { clickOnVisibleElement, regSleep, waitForVisibleElement, waitForInVisibleElement } from "../utility/util";
import { BasePage } from "../pages/base.page";


export class CartPopupPage extends BasePage {

  constructor() {
    super();
  }

  private cartPopup = () : ElementFinder => element(by.css('#layer_cart > div.clearfix'));
  private closeCartPopupIcon = (parentElement: ElementFinder): ElementFinder => parentElement.element(by.xpath(`//span[@title='Close window']`))
  private proceedToCheckout = (parentElement: ElementFinder): ElementFinder => parentElement.element(by.xpath(`//a[@title='Proceed to checkout']`))
  private continueShopping = (parentElement: ElementFinder): ElementFinder => parentElement.element(by.xpath(`//span[@title='Continue shopping']`))

  async closeCartPopup(): Promise<void> {
    await waitForVisibleElement(this.cartPopup());
    await clickOnVisibleElement(this.closeCartPopupIcon(this.cartPopup()));
    return;
  }

  async clickProceedToCheckout(): Promise<void> {
    await waitForVisibleElement(this.cartPopup());
    await clickOnVisibleElement(this.proceedToCheckout(this.cartPopup()));
    return;
  }

  async clickContinueShopping(): Promise<void> {
    await waitForVisibleElement(this.cartPopup());
    await clickOnVisibleElement(this.continueShopping(this.cartPopup()));
    return;
  }
}
