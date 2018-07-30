'use strict';

/* global helper */

const BasePage = require('./basePage');

class FlightsPage extends BasePage {
    constructor() {
        super();
        this.searchSummary = element(by.css('.js-search-summary'));
    }

    getSearchSummary() {
        return helper.waitForVisibilityOf(this.searchSummary, 7000)
            .then(() => helper.getTextOf(this.searchSummary));
    }

    getReturnInfo() {
        return this.inboundInfo.getText();
    }
}

module.exports = new FlightsPage();