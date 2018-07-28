'use strict';

const PAGE_OBJECTS = {
    home: './homePage',
    flights: './flightsPage',
    flightsInfo: './flightsInfoPage',
    feedbackPage: './feedbackPage'
};

module.exports.getPageObject = (pageName) => {
    return require(PAGE_OBJECTS[pageName]);
};
