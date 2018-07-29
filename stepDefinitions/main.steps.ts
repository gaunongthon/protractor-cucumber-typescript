import { browser, ExpectedConditions } from 'protractor';
import { expect } from '../utility/chai-imports';
import { PageFactory } from '../pages/pageFactory';

const { Then, When } = require("cucumber");

var pageFactory = PageFactory.getInstance();

Then(/^I log out Automation Practice$/, async function () {
    await this.logoutSystem();
});

Then (/^I return to My Account page$/, async function () {
    await pageFactory.getMainPage().returnToMyAccount();
})

Then (/^I return to Home page$/, async function () {
    await pageFactory.getMainPage().returnToHome();
})
