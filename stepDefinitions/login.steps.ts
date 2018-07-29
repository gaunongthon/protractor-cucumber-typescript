import { browser, ExpectedConditions } from 'protractor';
import { expect } from '../utility/chai-imports';
import { PageFactory } from '../pages/pageFactory';

const { Then, When, Given } = require("cucumber");

var pageFactory = PageFactory.getInstance();

When(/^I log in Automation Practice$/, async function () {
    await this.loginSystem();
  });
