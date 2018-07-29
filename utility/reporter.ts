import * as fs from "fs-extra";
import * as path from "path";
import { browser } from 'protractor';
const reporter = require('cucumber-html-reporter');

export class Reporter {

    public static createDirectory() {
        //Create new folder "json" if not exists. If it exists, empty it.
        let jsonFolder = `${browser.params.report.basedReportFolder}` + "/json";
        if (fs.existsSync(jsonFolder)) {
          fs.removeSync(jsonFolder)
        }
        fs.ensureDirSync(jsonFolder);
        //Create new folder "html" if not exists. If it exists, empty it.
        let htmlFolder = `${browser.params.report.basedReportFolder}` + "/html";
        if (fs.existsSync(htmlFolder)) {
          fs.removeSync(htmlFolder)
        }
        fs.ensureDirSync(htmlFolder);
    }

    public static createHTMLReport() {
        try {
            var serverName = browser.baseUrl.split('/').pop().split('.')[0];
            var jsonFileName = `${browser.params.report.basedReportFolder}/json/${serverName}`;
            var htmlFileName = `${browser.params.report.basedReportFolder}/html/${serverName}`;

            fs.pathExists(`${jsonFileName}.${process.pid}.json`, (err, pidExistInFile) => {
              if (pidExistInFile) {
                //preparing reports for parallel tests
                jsonFileName = `${jsonFileName}.${process.pid}.json`;
                htmlFileName = `${htmlFileName}.${process.pid}.html`;
              } else {
                //preparing reports for serial tests
                jsonFileName = `${jsonFileName}.json`;
                htmlFileName = `${htmlFileName}.html`;
              }

             //cucumber-html-reporter
              reporter.generate({
                  name: "Automation Report",
                  jsonFile: jsonFileName,
                  output: htmlFileName,
                  reportSuiteAsScenarios: true,
                  theme: "bootstrap",
                  storeScreenshots: true,
                  screenshotsDirectory: `${browser.params.report.basedReportFolder}`+"/screenshots",
                  metadata: {
                      "Test Environment": browser.baseUrl,
                      "Username": browser.params.login.adminUser,
                      "Passeword": browser.params.login.adminPassword,
                  }
              });
            })
         } catch (err) {
             if (err) {
                console.log(err)
                throw new Error("Failed to save cucumber test results to html file.");
             }
         }
    }

}
