const { After, Status, Before } = require("cucumber");
import { browser, utils } from 'protractor';
import { CallbackStepDefinition, HookScenarioResult, defineSupportCode } from 'cucumber';
import { WaitTime } from '../utility/util';
import { PageFactory } from '../pages/pageFactory';
var { setWorldConstructor } = require('cucumber');
var pageFactory = PageFactory.getInstance();

/**
 * set step timeout to 1 minute ( default is 5 seconds).
 */
defineSupportCode(({ setDefaultTimeout }) => {
    setDefaultTimeout(WaitTime);
});

/**
 * Overrides HookScenarioResult to get scenario information.
 * Required because of Cucumber.js 3 update
 */
interface ScenarioResult extends HookScenarioResult {
    sourceLocation: ({
        uri: string;
        line: number
    });
    result: ({
        duration: number;
        status: string
    });
}

/**
 * this hook runs after every test case except ones tagged with @skipLogout.
 * runs as last after hook.
 * @param {ScenarioResult}      scenario        object that contains information about the current scenario
*/
After('not @skipLogout', async function (scenario: ScenarioResult) {
    await checkScenarioStatus(scenario, this);
    //logout after each scenario
    await this.logoutSystem();
});

/**
 * Runs only after bad login test.
 * @param {ScenarioResult}      scenario        object that contains information about the current scenario
 */
After('@skipLogout', async function (scenario: ScenarioResult) {
    await checkScenarioStatus(scenario, this);
});

/**
 * Runs before each test case
 */
Before(async function (scenario: ScenarioResult) {
    console.log(`\nStarting scenario: ${scenario.sourceLocation.uri}`)
})


/**
 * logs in a admin user. Use this function for tests that need data preparation with admin user
 * @param {ScenarioResult}      scenario        object that contains information about the current scenario
 */
Before('@preconditionAdminlogin', async function (scenario: ScenarioResult) {
    await this.loginSystem();
});

/**
 * Attaches screenshot to report for failed test cases.
 * @param {ScenarioResult}      scenario        object that contains information about the current scenario
 * @param {any}                 worldObject     Cucumber World object
 */
async function checkScenarioStatus(scenario: ScenarioResult, worldObject: any) {
    if (scenario.result.status === Status.FAILED) {
        const screenShot = await browser.takeScreenshot();
        await worldObject.attach(screenShot, "image/png");
    }
}
