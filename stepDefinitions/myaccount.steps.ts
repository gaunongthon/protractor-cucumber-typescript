import { browser, ExpectedConditions } from 'protractor';
import { expect } from '../utility/chai-imports';
import { PageFactory } from '../pages/pageFactory';

const { Then, When } = require("cucumber");

var pageFactory = PageFactory.getInstance();

Then(/^I click on "([^"]*)"$/, async function (opt: string) {
  await pageFactory.getMyAccountPage().clickOption(opt);
});
