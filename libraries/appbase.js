

export default class AppBase{

  
    clickOn(locator) {
        try {
            this.getElement(locator).click();
        } catch (error) {
            expect(true, "Exception while handling " + locator.desc + ", reason " + error).equal(false);
        }
    }

    enterValue(locator, testdata) {
        try {
            this.getElement(locator).clear();
            this.getElement(locator).type(testdata);
        } catch (error) {
            console.log("Exception while handling " + locator.desc + ", reason " + error);
        }
    }

    getElement(locator){
        return cy.get(locator.value);
    }

}

