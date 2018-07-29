import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';
import { clickOnVisibleElement, regSleep, waitForVisibleElement, waitForInVisibleElement } from "../utility/util";
import { BasePage } from "../pages/base.page";


export class MainPage extends BasePage {

  constructor() {
    super();
  }

  private signOut = (): ElementFinder => element(by.css('a.logout'));
  private signIn = (): ElementFinder => element(by.css('a.login'));

  private myAccount = (): ElementFinder => element(by.css('a.account'));
  private home = (): ElementFinder => element(by.xpath(`//a[@title='Return to Home']`))

  async loadLoginPage(): Promise<void> {
    await clickOnVisibleElement(this.signIn());
    return;
  }

  async logOut(): Promise<void> {
    try {
      await clickOnVisibleElement(this.signOut());
    } catch (err) {
      await browser.refresh();
        await clickOnVisibleElement(this.signOut());
    }
    return;
  }

  async returnToMyAccount(): Promise<void> {
    await clickOnVisibleElement(this.myAccount());
    return;
  }

  async returnToHome(): Promise<void> {
    await clickOnVisibleElement(this.home());
    return;
  }

}
