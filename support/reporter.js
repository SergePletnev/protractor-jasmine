'use strict';

const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const path = require('path');

const reporter = new HtmlScreenshotReporter({
    dest: path.resolve('./reports'),
    filename: 'my-report.html'
});

exports.config = {
    beforeLaunch: () => {
        return new Promise((resolve) => {
            reporter.beforeLaunch(resolve);
        });
    },

    onPrepare: () => {
        jasmine.getEnv().addReporter(reporter);
    },

    afterLaunch: (exitCode) => {
        return new Promise((resolve) => {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};