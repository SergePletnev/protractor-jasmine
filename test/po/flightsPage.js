'use strict';

/* global helper */

const BasePage = require('./basePage');

class FlightsPage extends BasePage {
    constructor() {
        super();
        this.searchSummary = element(by.css('.js-search-summary'));
        // this.outboundInfo = element(by.css('#avaday-outbound-result .headerbox'));
        // this.inboundInfo = element(by.css('#avaday-inbound-result .headerbox'));
    }

    getSearchSummary() {
        return helper.getTextOf(this.searchSummary);
    }

    getReturnInfo() {
        return this.inboundInfo.getText();
    }
}

module.exports = new FlightsPage();