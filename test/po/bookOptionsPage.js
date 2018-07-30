'use strict';

const BasePage = require('./basePage');

const provider = require('./pageObjectProvider');

class BookOptionsPage extends BasePage {
    constructor() {
        super();
        this.roundTheWorldButton = element(by.xpath('//span[contains(text(), "Round the world trip")]//..//..//a'));
    }

    navigateToRoundTheWorld() {
        return this.roundTheWorldButton.click()
            .then(() => provider.getPageObject('tripRoundTheWorld'));
    }
}

module.exports = new BookOptionsPage();