import { browser, ExpectedConditions } from 'protractor';
import { convertMapToJsonObject, convertJsonObjectToMap } from '../utility/util';
import { expect } from '../utility/chai-imports';
import { PageFactory } from '../pages/pageFactory';

const { Then, When } = require("cucumber");

var pageFactory = PageFactory.getInstance();

Then(/^I verify shopping cart summary contains all selected products$/, async function () {
    let foundProducts = await pageFactory.getCartSummaryPage().getProductsList();
    this.attach(`\nFound Products: \n ${JSON.stringify(convertMapToJsonObject(foundProducts))}`);
    this.attach(`\nExpected Products: \n ${JSON.stringify(convertMapToJsonObject(this.products))}`);
    //Expecting returned data includes every single incident from baselined data
    for (let [k,val] of foundProducts) {
          //.include asserts that the given val is one of the values of the target.
          await expect(this.products).to.deep.include(val);
          //.have.any.keys asserts that target has at least one of the given keys but may or may not have more of them
          await expect(this.products).to.have.any.keys(k);
      }
});
