'use strict';

describe('angularjs homepage', () => {
    const booking = element(by.css('#anchor-manage-booking'));
    // const returnJourneyType = element(by.id('journey-return'));
    // const journeyTypes = element.all(by.css('input[name="journey-type"]'));
    // const offersButton = element(by.xpath('//span[contains(text(),"See all offers")]'));
    // const offersPageTtitle = element(by.css('.page-title'));

    beforeEach(() => {
        browser.get('https://www.flytap.com/en-pt/');
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toEqual('FlyTAP - Official Website | TAP Air Portugal');
    });

    it('should have "manage booking" on home page', () => {
        expect(booking.getText()).toContain('MANAGE BOOKING');
    });

    // it('should have return journey type selected by default', () => {
    //     expect(returnJourneyType.isSelected()).toBe(true);
    // });

    // it('should have 3 journey types when booking flight', () => {
    //     expect(journeyTypes.count()).toBe(3);
    // });

    // it('should display best offers', () => {
    //     offersButton.click();
    //     expect(offersPageTtitle.getText()).toBe('Best Offers');
    // });
});
