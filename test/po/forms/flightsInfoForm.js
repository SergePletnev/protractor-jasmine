'use strict';

/* global helper */

class FlightsInfoForm {
    constructor() {
        this.flightsInfoLink = element(by.id('anchor-flight-status'));
        this.departureAirportInput = element(by.id('departureAirport'));
        this.searchButton = element(by.css('.js-flightInfoContinueButton'));
    }

    getFlightsInfo(departureAirport) {
        return helper.clickElement(this.flightsInfoLink)
            .then(() => helper.setElementClear(this.departureAirportInput))
            .then(() => helper.writeTo(this.departureAirportInput, departureAirport))
            .then(() => helper.clickElement(this.searchButton));
    }

}

module.exports = FlightsInfoForm;