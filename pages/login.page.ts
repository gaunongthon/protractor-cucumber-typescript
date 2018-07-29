import { browser, by, element, ElementFinder } from 'protractor';
import { sendKeysToVisibleElement, clickOnVisibleElement, waitForVisibleElement } from "../utility/util";
import { BasePage } from "../pages/base.page";

export class LoginPage extends BasePage {

  constructor() {
    super();
  }
  private inputUser = (): ElementFinder => element(by.id('email'));
  private inputPassword = (): ElementFinder => element(by.name('passwd'));
  private loginButton = (): ElementFinder => element(by.xpath("//*[@id='SubmitLogin']/span"));

  async loginUser(username: string, password: string): Promise<void>{
    await waitForVisibleElement(this.inputUser());
    await this.inputUser().clear();
    await sendKeysToVisibleElement(this.inputUser(), username);
    await this.inputPassword().clear();
    await sendKeysToVisibleElement(this.inputPassword(), password);
    await clickOnVisibleElement(this.loginButton());
  }
}
