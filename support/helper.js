'use strict';

class Helper {

    clickElement(element) {
        return element.click();
    }

    writeTo(element, value) {
        return element.sendKeys(value);
    }

    waitForVisibilityOf(element, timeout) {
        const timeoutMs = timeout || browser.params.defaultTimeOut;
        return browser.wait(protractor.ExpectedConditions.visibilityOf(element), timeoutMs,
            `Waiting for visibilityOf of ${element.locator()} failed`);
    }

    setElementClear(element) {
        return element.clear();
    }

    getTextOf(element) {
        return element.getText();
    }

    getAttributeValueOf(element, attribute) {
        return element.getAttribute(attribute);
    }
}

module.exports = Helper;