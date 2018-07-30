'use strict';

/* global helper */

const BasePage = require('./basePage');
const FlightsInfoForm = require('./forms/flightsInfoForm');
const FlightsSearchForm = require('./forms/flightsSearchForm');

const provider = require('./pageObjectProvider');

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.flytap.com/en-pt/';
        this.flightsInfoForm = new FlightsInfoForm();
        this.flightsSearchForm = new FlightsSearchForm();

        this.offersTitle = element(by.css('[class= "section-title search-offers"]'));
        this.journeyTypes = element.all(by.css('input[name="journey-type"]'));
        this.exploreDestinationsLink = element.all(by.css('.slider-explore-wrapper .item-card'));
        this.citiesExploreLink = element.all(by.css('.city'));
    }

    getFlightsInfo(departureAirport) {
        return this.flightsInfoForm.getFlightsInfo(departureAirport)
            .then(() => {
                return provider.getPageObject('flightsInfo');
            });
    }

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

    exploreDisplayedDestination() {
        const destinationObj = {};
        return helper.getTextOf(this.citiesExploreLink.get(0))
            .then((city) => {
                destinationObj.city = city;
            })
            .then(() => helper.clickElement(this.exploreDestinationsLink.get(0)))
            .then(() => {
                destinationObj.page = provider.getPageObject('destinationExplore');
                return destinationObj;
            });
    }
}

module.exports = HomePage;