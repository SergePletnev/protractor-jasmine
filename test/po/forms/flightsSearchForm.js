'use strict';

/* global helper */

class FlightsSearchForm {
    constructor() {
        this.departureAirportInput = element(by.id('origin'));
        this.destinationAirportInput = element(by.id('destination'));
        this.departureDateInput = element(by.id('dateDepartureTwoWays'));
        this.returnDateInput = element(by.id('dateReturnTwoWays'));
        this.searchButton = element(by.css('#jsIbeBookingForm .js-ibe-form-sbmt'));
    }

    searchFlights(departureAirport, destinationAirport, departureDate, returnDate) {
        return helper.setElementClear(this.destinationAirportInput)
            .then(() => helper.writeTo(this.destinationAirportInput, destinationAirport))
            .then(() => helper.clickElement(this.destinationAirportInput))
            .then(() => browser.sleep(2000))
            .then(() => helper.setElementClear(this.departureAirportInput))
            .then(() => helper.writeTo(this.departureAirportInput, departureAirport))
            .then(() => helper.setElementClear(this.departureDateInput))
            .then(() => helper.writeTo(this.departureDateInput, departureDate))
            .then(() => helper.setElementClear(this.returnDateInput))
            .then(() => helper.writeTo(this.returnDateInput, returnDate))
            .then(() => helper.clickElement(this.searchButton))
            .then(() => browser.sleep(10000))
            .then(() => {
                browser.ignoreSynchronization = true;
            });
    }
}

module.exports = FlightsSearchForm;