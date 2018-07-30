'use strict';

class Header {
    constructor() {
        this.languageLink = element(by.id('js-show-modal-lang'));
        this.header = element(by.css('.header-bar'));
    }
}

module.exports = Header;