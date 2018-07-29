import { browser, ExpectedConditions } from 'protractor';
import { expect } from '../utility/chai-imports';
import { PageFactory } from '../pages/pageFactory';

const { Then, When } = require("cucumber");

var pageFactory = PageFactory.getInstance();

Then(/^I open "([^"]*)" product in "([^"]*)" view$/, async function (productPosition: string, opt: string) {
  await pageFactory.getHomePage().selectItem(opt, productPosition);
});
