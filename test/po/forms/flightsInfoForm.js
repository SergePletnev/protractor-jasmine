'use strict';

class FlightsInfoForm {
    constructor() {
        this.flightsInfoLink = element(by.id('anchor-flight-status'));

    }

    // searchCarsForRent(location, dateRentFrom) {
    //     return this.flightsInfoLink.click()
    //         .then(() => this.locationInput.clear())
    //         .then(() => this.locationInput.sendKeys(location))
    //         .then(() => this.locationInput.sendKeys(protractor.Key.ENTER))
    //         .then(() => this.datesFromRentLink.get(dateRentFrom - 1).click())
    //         .then(() => {
    //             browser.ignoreSynchronization = true;
    //         });
    // }

}

module.exports = FlightsInfoForm;