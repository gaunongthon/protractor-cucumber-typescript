import * as fs from "fs-extra";
import * as path from "path";
import { browser } from 'protractor';
const protractorImageComparison = require('protractor-image-comparison');

export class ImageComparison {

    public static createDirectory() {
        let basedDirImageComparison = `${browser.params.imageComparison.basedImageComparisonFolder}`;
        if (!fs.existsSync(basedDirImageComparison)) {
          fs.ensureDirSync(basedDirImageComparison);
        }
        browser.protractorImageComparison = new protractorImageComparison(
             {
                 baselineFolder: basedDirImageComparison + '/baseline/',
                 screenshotPath: basedDirImageComparison + '/save/actual/screenshots/',
                 ignoreAntialiasing: true,
                 disableCSSAnimation: true
             }
         );
    }
}
