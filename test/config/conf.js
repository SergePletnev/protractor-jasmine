'use strict';

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
        browser.driver.manage().window().maximize();
    },

    jasmineNodeOpts: {
        showColors: true
    }
};