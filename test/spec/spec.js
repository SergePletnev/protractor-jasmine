'use strict';

const HomePage = require('./../po/homePage');

describe('home page content', () => {
    let homePage;

    beforeAll(() => {
        homePage = new HomePage();
        return homePage.open();
    });

    it('should have a title', () => {
        expect(homePage.getPageTitle()).to.eventually.be.equal('FlyTAP - Official Website | TAP Air Portugal');
    });

    it('should have "best offers" on home page', () => {
        expect(homePage.getOffersTitle()).to.eventually.contains('best offers');
    });

    it('should have 3 journey types when booking flight', () => {
        expect(homePage.getJourneyTypesCount()).to.eventually.equal(3);
    });

    it('should be possible to change language', async () => {
        await homePage.changeLanguageToPortuguese();
        expect(homePage.getPageLanguage()).to.eventually.contains('PT');
    });
});

describe('portal functionality', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        return homePage.open();
    });

    it('should be possible to search flights by required locations and dates', async () => {
        const flightsPage = await homePage.searchFlights('(MAD) Madrid, Spain', '(LIS) Lisbon, Portugal', '06/08/2018', '14/08/2018');
        expect(flightsPage.getSearchSummary()).to.eventually.contains('Madrid')
            .and.to.contains('6 Aug')
            .and.to.contains('14 Aug')
            .and.to.contains('Lisbon');
    });

    it('should be possible to get flights information for required airport', async () => {
        const flightsInfoPage = await homePage.getFlightsInfo('(BCN) Barcelona, Spain');
        expect(flightsInfoPage.getResultTitle()).to.eventually.equal('Search Results: Departure from (BCN) Barcelona, Spain');
    });

    it('should be possible to explore destinations', async () => {
        const destination = await homePage.exploreDisplayedDestination();
        expect(destination.page.getDestination()).to.eventually.equal(destination.city);
    });

    it('should be possible to organize round the world trip', async () => {
        const bookOptionsPage = await homePage.navigateToBookOptions();
        const tripRoundTheWorldPage = await bookOptionsPage.navigateToRoundTheWorld();
        expect(tripRoundTheWorldPage.getPageTitle()).to.eventually.contains('Trip around the world');
    });
});

describe('additional flytap airline services', () => {
    let homePage;

    beforeAll(() => {
        homePage = new HomePage();
        return homePage.open();
    });

    it('should be possible to rent a car', async () => {
        const carRentPage = await homePage.navigateToCarRent();
        expect(carRentPage.getPageTitle()).to.eventually.equal('TAP | Car rental');
    });

    it('should be possible to book a hotel', async () => {
        const hotelsBookingPage = await homePage.navigateToHotelsBooking();
        expect(hotelsBookingPage.getPageTitle()).to.eventually.contains('hotels');
    });

    it('should be possible to search for the airport transfer', async () => {
        const carRentPage = await homePage.navigateToTransfers();
        expect(carRentPage.getPageTitle()).to.eventually.contains('transfers');
    });

    afterEach(() => {
        browser.driver.close();
        browser.ignoreSynchronization = false;
        browser.getAllWindowHandles()
            .then((handles) => browser.switchTo().window(handles[0]));
    });
});