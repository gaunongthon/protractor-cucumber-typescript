import { ElementFinder, by, element, ProtractorBy, browser, ExpectedConditions } from 'protractor';

export const jsonFile = require('jsonfile')
export const path = require("path");


export async function getPageTitle(): Promise<string> {
  return await browser.getTitle();
}


export async function waitForVisibleElement(webElement: ElementFinder) {
  await waitForVisibleElementWithTimeout(webElement, WaitTime);
}

export async function waitForVisibleElementWithTimeout(webElement: ElementFinder, waitTime: number) {
  await browser.wait(ExpectedConditions.visibilityOf(webElement), waitTime);
}

export async function waitForInVisibleElement(webElement: ElementFinder) {
  await browser.wait(ExpectedConditions.invisibilityOf(webElement), WaitTime);
}

export async function clickOnVisibleElement(webElement: ElementFinder) {
  await waitForVisibleElement(webElement);
  await webElement.click();
}

export async function sendKeysToVisibleElement(webElement: ElementFinder, keys: string) {
  await waitForVisibleElement(webElement);
  await webElement.clear();
  await webElement.sendKeys(keys);
}

export async function sendKeysToVisibleElementWithoutClear(webElement: ElementFinder, keys: string) {
  await waitForVisibleElement(webElement);
  await webElement.sendKeys(keys);
}

export async function dragVisibleElementToTargetElement(webElement: ElementFinder, targetWebElement: ElementFinder) {
  await browser.actions().dragAndDrop(webElement.getWebElement(), targetWebElement.getWebElement()).perform();
}

export async function regSleep() {
  await browser.sleep(1000);
}

export async function sortArrayOfStringsAsDate (arrayOfStrings: string[]) : Promise<Date[]> {
  return arrayOfStrings.map(st => {
    let a = st.split('/').toString().split(' ').toString().split(':').map(Number);
    return new Date(a[0], a[1], a[2], a[3], a[4], a[5])
  }).sort();
};

export async function reverseArrayOfStringsAsDate (arrayOfStrings: string[]) : Promise<Date[]> {
  return arrayOfStrings.map(st => {
    let a = st.split('/').toString().split(' ').toString().split(':').map(Number);
    return new Date(a[0], a[1], a[2], a[3], a[4], a[5])
  }).reverse();
};

export async function convertArrayOfStringsToArrayOfDates (arrayOfStrings: string[]) : Promise<Date[]> {
  return arrayOfStrings.map(st => {
    let a = st.split('/').toString().split(' ').toString().split(':').map(Number);
    return new Date(a[0], a[1], a[2], a[3], a[4], a[5])
  })
};

export function convertMapToJsonObject(map: Map<any,any>): any {
    const out = Object.create(null)
    map.forEach((value, key) => {
      if (value instanceof Map) {
        out[key] = convertMapToJsonObject(value)
      }
      else {
        out[key] = value
      }
    })
    return out
  }

  export function convertJsonObjectToMap(jsonObject: any): any {
    let strMap = new Map();
    for (let k of Object.keys(jsonObject)) {
        if ((jsonObject[k] instanceof Object) && !(jsonObject[k] instanceof Array)) {
          strMap.set(k, convertJsonObjectToMap(jsonObject[k]));
        }
        else {
          strMap.set(k, jsonObject[k]);
        }
    }
    return strMap;
}

export const WaitTime: number = 60000;
