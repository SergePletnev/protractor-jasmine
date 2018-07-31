'use strict';

const Helper = require('./../../support/helper.js');
const path = require('path');
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

const reporter = new HtmlScreenshotReporter({
    dest: path.resolve('./reports'),
    filename: 'my-report.html',
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: true
});

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
        jasmine.getEnv().addReporter(reporter);

        browser.driver.manage().timeouts().implicitlyWait(25 * 1000);
        browser.waitForAngularEnabled(true);
        browser.driver.manage().window().maximize();

        const chai = require('chai');
        chai.use(require('chai-as-promised'));
        global.expect = chai.expect;

        global.helper = new Helper();
    },

    beforeLaunch: () => {
        return new Promise((resolve) => {
            reporter.beforeLaunch(resolve);
        });
    },

    afterLaunch: (exitCode) => {
        return new Promise((resolve) => {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    jasmineNodeOpts: {
        showColors: true
    }
};