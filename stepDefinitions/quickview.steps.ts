import { browser, ExpectedConditions } from 'protractor';
import { expect } from '../utility/chai-imports';
import { PageFactory } from '../pages/pageFactory';

const { Then, When } = require("cucumber");

var pageFactory = PageFactory.getInstance();

Then(/^I add product to shopping cart in "([^"]*)" view$/, async function (viewType: string) {
  let [sku, name,price] = await pageFactory.getQuickViewPage().addProductToCart(viewType);
  this.products.set(sku, [name,price]);
});
