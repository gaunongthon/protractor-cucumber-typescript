//put common steps here
import { browser, ExpectedConditions } from 'protractor';
import { expect } from '../utility/chai-imports';
import { PageFactory } from '../pages/pageFactory';

var pageFactory = PageFactory.getInstance();

const { Then, When } = require("cucumber");

Then(/^I am at "([^"]*)" page$/, async function (pageTitle: string) {
    await expect(pageFactory.getCommonPage().isPagePresent(pageTitle)).eventually.true;
    if (pageTitle==="Store") {
      let partialElementName = pageTitle;
      let elementName = await pageFactory.getCommonPage().getPageLogoElement();
      await expect(browser.protractorImageComparison.checkElement(elementName, partialElementName)).to.eventually.be.at.most(0);
    }
});
