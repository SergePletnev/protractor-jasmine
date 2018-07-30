'use strict';

const BasePage = require('./basePage');

class DestinationExplorePage extends BasePage {
    constructor() {
        super();
        this.destination = element(by.css('.page-title'));
    }

    getDestination() {
        return this.destination.getText();
    }
}

module.exports = new DestinationExplorePage();