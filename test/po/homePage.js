'use strict';

/* global helper */

const BasePage = require('./basePage');
const FlightsInfoForm = require('./forms/flightsInfoForm');
const FlightsSearchForm = require('./forms/flightsSearchForm');
const logger = require('./../../support/logger').logger;

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
        this.bookOptionsLink = element(by.linkText('See all book options'));
        this.carRentLink = element(by.linkText('RENT-A-CAR'));
        this.hotelBookingLink = element(by.linkText('HOTEL'));
        this.transfersLink = element(by.linkText('TRANSFERS'));
    }

    getFlightsInfo(departureAirport) {
        logger.info(`Getting flight info for [${departureAirport}]`);
        return this.flightsInfoForm.getFlightsInfo(departureAirport)
            .then(() => {
                return provider.getPageObject('flightsInfo');
            });
    }

    searchFlights(departureAirport, destinationAirport, departureDate, returnDate) {
        logger.info(`Searching flights for [from ${departureAirport} to ${destinationAirport} dates: to - ${departureDate}, return - ${returnDate}]`);
        return this.flightsSearchForm.searchFlights(departureAirport, destinationAirport, departureDate, returnDate)
            .then(() => {
                return provider.getPageObject('flights');
            });
    }

    getOffersTitle() {
        return this.helper.getTextOf(this.offersTitle);
    }

    getJourneyTypesCount() {
        logger.info('Getting journey types count');
        return this.journeyTypes.count();
    }

    exploreDisplayedDestination() {
        logger.info('Exploring displayed destination');
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

    navigateToBookOptions() {
        logger.info('Navigating to book options page');
        return helper.clickElement(this.bookOptionsLink)
            .then(() => provider.getPageObject('bookOptions'));
    }

    navigateToCarRent() {
        logger.info('Navigating to cars rent page');
        return helper.clickElement(this.carRentLink)
            .then(() => browser.getAllWindowHandles())
            .then((handles) => browser.switchTo().window(handles[1]))
            .then(() => {
                browser.ignoreSynchronization = true;
            })
            .then(() => provider.getPageObject('carRent'));
    }

    navigateToHotelsBooking() {
        logger.info('Navigating to hotels booking page');
        return helper.clickElement(this.hotelBookingLink)
            .then(() => browser.getAllWindowHandles())
            .then((handles) => browser.switchTo().window(handles[1]))
            .then(() => {
                browser.ignoreSynchronization = true;
            })
            .then(() => provider.getPageObject('hotels'));
    }

    navigateToTransfers() {
        logger.info('Navigating to transfers page');
        return helper.clickElement(this.transfersLink)
            .then(() => browser.getAllWindowHandles())
            .then((handles) => browser.switchTo().window(handles[1]))
            .then(() => {
                browser.ignoreSynchronization = true;
            })
            .then(() => provider.getPageObject('transfers'));
    }

}

module.exports = HomePage;