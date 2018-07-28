'use strict';

const chai = require("chai");
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

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
});

// describe('portal functionality', () => {
//     const homePage = new HomePage();

//     beforeEach(() => {
//         return homePage.open();
//     });

//     // it('should have return journey type selected by default', () => {
//     //     expect(returnJourneyType.isSelected()).toBe(true);
//     // });


// });
