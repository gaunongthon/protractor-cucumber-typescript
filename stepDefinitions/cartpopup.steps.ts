import { browser, ExpectedConditions } from 'protractor';
import { expect } from '../utility/chai-imports';
import { PageFactory } from '../pages/pageFactory';

const { Then, When } = require("cucumber");

var pageFactory = PageFactory.getInstance();

Then(/^I close shopping cart pop-up summary$/, async function () {
    await pageFactory.getCartPopupPage().closeCartPopup();
});

Then(/^I proceed to checkout shopping cart$/, async function () {
    await pageFactory.getCartPopupPage().clickProceedToCheckout();
});

Then(/^I continue shopping$/, async function () {
    await pageFactory.getCartPopupPage().clickContinueShopping();
});
