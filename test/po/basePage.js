'use strict';

/* global helper */

const Header = require('./common/header.js');

class BasePage {

    constructor() {
        this.header = new Header();
        this.portugueseLanguageLink = element(by.id('pt-pt'));
    }

    open() {
        browser.get(this.url);
    }

    getPageTitle() {
        return browser.getTitle();
    }

    changeLanguageToPortuguese() {
        return helper.clickElement(this.header.languageLink)
            .then(() => helper.clickElement(this.portugueseLanguageLink));
    }

    getPageLanguage() {
        return helper.getTextOf(this.header.languageLink);
    }
}

module.exports = BasePage;