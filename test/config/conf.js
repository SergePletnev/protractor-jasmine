'use strict';

const Helper = require('./../../support/helper.js');
const path = require('path');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [path.resolve('./test/spec/*.js')],

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['disable-infobars']
        }
    },

    onPrepare: () => {
        browser.driver.manage().timeouts().implicitlyWait(25 * 1000);
        browser.waitForAngularEnabled(true);
        browser.driver.manage().window().maximize();

        const chai = require('chai');
        chai.use(require('chai-as-promised'));
        global.expect = chai.expect;

        global.helper = new Helper();
    },

    jasmineNodeOpts: {
        showColors: true
    }
};