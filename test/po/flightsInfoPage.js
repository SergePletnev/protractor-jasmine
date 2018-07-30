'use strict';

const BasePage = require('./basePage');

class FlightsInfoPage extends BasePage {
    constructor() {
        super();
        this.searchResultTitle = element(by.xpath('//*[contains(text(), "Search Results:")]'));
    }

    getResultTitle() {
        return this.searchResultTitle.getText();
    }
}

module.exports = new FlightsInfoPage();