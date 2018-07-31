'use strict';

/* global helper */

const logger = require('./../../support/logger').logger;
const Header = require('./common/header.js');

class BasePage {
    constructor() {
        this.header = new Header();
        this.portugueseLanguageLink = element(by.id('pt-pt'));
    }

    open() {
        logger.info(`Opening ${this.url} url`);
        browser.get(this.url);
    }

    getPageTitle() {
        return browser.getTitle();
    }

    changeLanguageToPortuguese() {
        logger.info('Changing language to Portuguese');
        return helper.clickElement(this.header.languageLink)
            .then(() => helper.clickElement(this.portugueseLanguageLink));
    }

    getPageLanguage() {
        return helper.getTextOf(this.header.languageLink);
    }
}

module.exports = BasePage;