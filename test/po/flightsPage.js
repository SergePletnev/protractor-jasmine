'use strict';

/* global helper */

const BasePage = require('./basePage');
const logger = require('./../../support/logger').logger;

class FlightsPage extends BasePage {
    constructor() {
        super();
        this.searchSummary = element(by.css('.js-search-summary'));
    }

    getSearchSummary() {
        logger.info('Getting search summary');
        return helper.waitForVisibilityOf(this.searchSummary, 7000)
            .then(() => helper.getTextOf(this.searchSummary));
    }
}

module.exports = new FlightsPage();