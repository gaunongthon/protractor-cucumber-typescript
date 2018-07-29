import { browser, utils } from 'protractor';
import { PageFactory } from '../pages/pageFactory';
import { expect } from '../utility/chai-imports';
import {convertJsonObjectToMap, convertMapToJsonObject} from '../utility/util'
var { setWorldConstructor } = require('cucumber');
var pageFactory = PageFactory.getInstance();

/**
 * Overrides Cucumber world object
 */
interface World {
    'attach': ((arg1: string | Buffer, arg2: string) => void);
    'login': (userName: string, password: string) => void;
    'logout': () => void;
    'userName': string;
    'products': Map<string,string[]>;
}

setWorldConstructor(function ({attach, parameters}: any) {
    this.attach = attach;
    this.products = new Map();
    this.loginSystem = async function () {
        await pageFactory.getMainPage().loadLoginPage();
        await pageFactory.getLoginPage().loginUser(browser.params.login.adminUser, browser.params.login.adminPassword);
        //set user name to global userName variable to use in next steps
        this.userName = browser.params.login.adminUser;
        //attach user name to test report
        await this.attach(`${this.userName} logged in`);
        await expect(pageFactory.getCommonPage().isPagePresent("My account")).eventually.true;
    };

    this.logoutSystem = async function () {
        await pageFactory.getMainPage().logOut();
        await this.attach(`${this.userName} logged out`);
    }
});
