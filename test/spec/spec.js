'use strict';

const HomePage = require('./../po/homePage');
const logger = require('./../../support/logger').logger;

describe('home page content', () => {
    let homePage;

    beforeAll(() => {
        logger.info('[beforeAll] of describe "home page content" Opening home page');
        homePage = new HomePage();
        return homePage.open();
    });

    it('should have a title', () => {
        logger.info('[it] should have a title');
        expect(homePage.getPageTitle()).to.eventually.be.equal('FlyTAP - Official Website | TAP Air Portugal');
    });

    it('should have "best offers" on home page', () => {
        logger.info('[it] should have "best offers" on home page');
        expect(homePage.getOffersTitle()).to.eventually.contains('best offers');
    });

    it('should have 4 journey types when booking flight', () => {
        logger.info('[it] should have 4 journey types when booking flight');
        expect(homePage.getJourneyTypesCount()).to.eventually.equal(4);
    });

    it('should be possible to change language', async () => {
        logger.info('[it] should be possible to change language');
        await homePage.changeLanguageToPortuguese();
        expect(homePage.getPageLanguage()).to.eventually.contains('PT');
    });
});

describe('portal functionality', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        logger.info('[beforeEach] of describe "portal functionality" Opening home page');
        return homePage.open();
    });

    // "Unable to identify your browser" when sync is disabled on non-angular page
    xit('should be possible to search flights by required locations and dates', async () => {
        logger.info('[it] should be possible to search flights by required locations and dates');
        const flightsPage = await homePage.searchFlights('(LIS) Lisbon, Portugal', '(AGP) Malaga, Spain', '10/08/2018', '18/08/2018');
        expect(flightsPage.getSearchSummary()).to.eventually.contains('Lisbon')
            .and.to.contains('10 Aug')
            .and.to.contains('18 Aug')
            .and.to.contains('Malaga');
    });

    it('should be possible to get flights information for required airport', async () => {
        logger.info('[it] should be possible to get flights information for required airport');
        const flightsInfoPage = await homePage.getFlightsInfo('(BCN) Barcelona, Spain');
        expect(flightsInfoPage.getResultTitle()).to.eventually.equal('Search Results: Departure from (BCN) Barcelona, Spain');
    });

    it('should be possible to explore destinations', async () => {
        logger.info('[it] should be possible to explore destinations');
        const destination = await homePage.exploreDisplayedDestination();
        expect(destination.page.getDestination()).to.eventually.equal(destination.city);
    });

    it('should be possible to organize round the world trip', async () => {
        logger.info('[it] should be possible to organize round the world trip');
        const bookOptionsPage = await homePage.navigateToBookOptions();
        const tripRoundTheWorldPage = await bookOptionsPage.navigateToRoundTheWorld();
        expect(tripRoundTheWorldPage.getPageTitle()).to.eventually.contains('Trip around the world');
    });
});

describe('additional flytap airline services', () => {
    let homePage;

    beforeAll(() => {
        logger.info('[beforeAll] of describe "additional flytap airline services" Opening home page');
        homePage = new HomePage();
        return homePage.open();
    });

    it('should be possible to rent a car', async () => {
        logger.info('[it] should be possible to rent a car');
        const carRentPage = await homePage.navigateToCarRent();
        expect(carRentPage.getPageTitle()).to.eventually.equal('TAP | Car rental');
    });

    it('should be possible to book a hotel', async () => {
        logger.info('[it] should be possible to book a hotel');
        const hotelsBookingPage = await homePage.navigateToHotelsBooking();
        expect(hotelsBookingPage.getPageTitle()).to.eventually.contains('hotel');
    });

    it('should be possible to search for the airport transfer', async () => {
        logger.info('[it] should be possible to search for the airport transfer');
        const carRentPage = await homePage.navigateToTransfers();
        expect(carRentPage.getPageTitle()).to.eventually.contains('transfers');
    });

    afterEach(() => {
        logger.info('[afterEach] of describe "additional flytap airline services" Closing opened tab');
        browser.driver.close();
        browser.ignoreSynchronization = false;
        browser.getAllWindowHandles()
            .then((handles) => browser.switchTo().window(handles[0]));
    });
});