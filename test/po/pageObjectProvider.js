'use strict';

const PAGE_OBJECTS = {
    home: './homePage',
    flights: './flightsPage',
    flightsInfo: './flightsInfoPage',
    destinationExplore: './destinationExplorePage',
    bookOptions: './bookOptionsPage',
    tripRoundTheWorld: './tripRoundTheWorldPage',
    carRent: './carRentPage',
    hotels: './hotelsPage',
    transfers: './transfersPage'
};

module.exports.getPageObject = (pageName) => {
    return require(PAGE_OBJECTS[pageName]);
};
