'use strict';

/* global helper */

const BasePage = require('./basePage');
const logger = require('./../../support/logger').logger;
const provider = require('./pageObjectProvider');

class BookOptionsPage extends BasePage {
    constructor() {
        super();
        this.roundTheWorldButton = element(by.xpath('//span[contains(text(), "Round the world trip")]//..//..//a'));
    }

    navigateToRoundTheWorld() {
        logger.info('Navigating to round the world page');
        return helper.clickElement(this.roundTheWorldButton)
            .then(() => provider.getPageObject('tripRoundTheWorld'));
    }
}

module.exports = new BookOptionsPage();