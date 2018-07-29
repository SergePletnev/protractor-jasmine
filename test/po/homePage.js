'use strict';

const BasePage = require('./basePage');
const FlightsInfoForm = require('./forms/flightsInfoForm');
const FlightsSearchForm = require('./forms/flightsSearchForm');
const Helper = require('./../../support/helper.js');

const provider = require('./pageObjectProvider');

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.flytap.com/en-pt/';
        this.flightsInfoForm = new FlightsInfoForm();
        this.flightsSearchForm = new FlightsSearchForm();
        this.helper = new Helper();

        this.offersTitle = element(by.css('[class= "section-title search-offers"]'));
        this.journeyTypes = element.all(by.css('input[name="journey-type"]'));
    }

    // searchCarsForRent(location, dateRentFrom, dateRentTo) {
    //     return this.flightsInfoForm.searchCarsForRent(location, dateRentFrom, dateRentTo)
    //         .then(() => {
    //             return provider.getPageObject('cars');
    //         });
    // }

    searchFlights(departureLocation, destinationLocation, departureDate, returnDate) {
        return this.flightsSearchForm.searchFlights(departureLocation, destinationLocation, departureDate, returnDate)
            .then(() => {
                return provider.getPageObject('flights');
            });
    }

    getOffersTitle() {
        return this.helper.getTextOf(this.offersTitle);
    }

    getJourneyTypesCount() {
        return this.journeyTypes.count();
    }

}

module.exports = HomePage;