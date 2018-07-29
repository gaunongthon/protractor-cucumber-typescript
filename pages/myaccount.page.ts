import { browser, by, element, ElementFinder, ElementArrayFinder } from 'protractor';
import { clickOnVisibleElement, regSleep, waitForVisibleElement, waitForInVisibleElement } from "../utility/util";
import { BasePage } from "../pages/base.page";


export class MyAccountPage extends BasePage {

  constructor() {
    super();
  }

  private optionToManage = (text: string): ElementFinder => element(by.xpath(`//a[@title='${text}']`))

  async clickOption(opt: string): Promise<void> {
      let optionToManage = opt;
      switch (opt){
        case "Order history":
          optionToManage = "Orders";
          break;
        case "Order slip":
          optionToManage = "Credit slips";
          break;
      }
    await clickOnVisibleElement(this.optionToManage(optionToManage));
    return;
  }

}
