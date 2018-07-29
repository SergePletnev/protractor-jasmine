'use strict';

const HomePage = require('./../po/homePage');

// describe('home page content', () => {
//     let homePage;

//     beforeAll(() => {
//         homePage = new HomePage();
//         return homePage.open();
//     });

//     it('should have a title', () => {
//         expect(homePage.getPageTitle()).to.eventually.be.equal('FlyTAP - Official Website | TAP Air Portugal');
//     });

//     it('should have "best offers" on home page', () => {
//         expect(homePage.getOffersTitle()).to.eventually.contains('best offers');
//     });

//     it('should have 3 journey types when booking flight', () => {
//         expect(homePage.getJourneyTypesCount()).to.eventually.equal(3);
//     });
// });

describe('portal functionality', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        return homePage.open();
    });

    it('should be able to search flights by required locations and dates', async () => {
        const flightsPage = await homePage.searchFlights('(MAD) Madrid, Spain', '(LIS) Lisbon , Portugal', '06/08/2018', '14/08/2018');
        expect(flightsPage.getSearchSummary()).to.eventually.contains('Madrid')
            .and.to.contains('6 Aug')
            .and.to.contains('14 Aug')
            .and.to.contains('Lisbon');
    });


});
