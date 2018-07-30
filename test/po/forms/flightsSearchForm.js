'use strict';

/* global helper */

class FlightsSearchForm {
    constructor() {
        this.departureLocationInput = element(by.id('origin'));
        this.destinationLocationInput = element(by.id('destination'));
        this.departureDateInput = element(by.id('dateDepartureTwoWays'));
        this.returnDateInput = element(by.id('dateReturnTwoWays'));
        this.searchButton = element(by.css('#jsIbeBookingForm .js-ibe-form-sbmt'));
    }

    searchFlights(departureLocation, destinationLocation, departureDate, returnDate) {
        return helper.setElementClear(this.destinationLocationInput)
            .then(() => helper.writeTo(this.destinationLocationInput, destinationLocation))
            .then(() => helper.clickElement(this.destinationLocationInput))
            .then(() => browser.sleep(2000))
            .then(() => helper.setElementClear(this.departureLocationInput))
            .then(() => helper.writeTo(this.departureLocationInput, departureLocation))
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