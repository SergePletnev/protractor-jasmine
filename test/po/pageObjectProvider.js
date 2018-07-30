'use strict';

const PAGE_OBJECTS = {
    home: './homePage',
    flights: './flightsPage',
    flightsInfo: './flightsInfoPage',
    destinationExplore: './destinationExplorePage'
};

module.exports.getPageObject = (pageName) => {
    return require(PAGE_OBJECTS[pageName]);
};
