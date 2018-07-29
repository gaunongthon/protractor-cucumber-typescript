import { browser, by, element, ElementFinder, } from 'protractor';
import { getPageTitle, waitForVisibleElement,  } from "../utility/util";
import { BasePage } from "../pages/base.page";

export class CommonPage extends BasePage {

    constructor() {
        super();
    }

    private pageLogo = (): ElementFinder => element(by.xpath(`//*[@id="header_logo"]/a/img`));

    async isPagePresent(pageTitle: string): Promise<boolean> {
      let flag = await getPageTitle().then(text => text.includes(pageTitle));
      return flag;
    }

    async getPageLogoElement() : Promise<ElementFinder>{
      return this.pageLogo();
    }

}
