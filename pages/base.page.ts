import { browser, by, element, ElementFinder, ExpectedConditions, ElementArrayFinder } from 'protractor';
import { waitForVisibleElement, regSleep, clickOnVisibleElement } from '../utility/util';

export class BasePage {

  constructor() {
  }

  async scrollTo(scrollToElement: ElementFinder) {
    return scrollToElement.getLocation().then(function (loc) {
        return browser.executeScript('window.scrollTo(0,arguments[0]);', loc.y);
    });
  };

  async mouseOver(elementToMouseOver: ElementFinder) {
    return  browser.actions().mouseMove(elementToMouseOver).perform();
  }

}
