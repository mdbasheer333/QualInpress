
import AppBase from "../libraries/appbase";
import loginPageLocators from '../locators/LoginPageLocators';
import { } from 'chai-as-promised';
import { } from 'chai';

export default class HomePage extends AppBase {

    get formLink() {
        return this.getElement(loginPageLocators.linkForm);
    }

    get formLinkDesc() {
        return loginPageLocators.linkForm.desc;
    }

    clickOnDummyLink() {
        this.clickOn(loginPageLocators.linkDummy);
    }

    clickOnPagesLink() {
        this.clickOn(loginPageLocators.linkPages);
    }

    enterUserName(valueToEnter) {
        this.enterValue(loginPageLocators.txtUserName, valueToEnter);
        return this;
    }

    enterPassword(valueToEnter) {
        this.enterValue(loginPageLocators.txtPassword, valueToEnter);
    }

    verifyValue() {
        cy.get(loginPageLocators.txtUserName.value).should('have.value', 'testing user name');
        cy.get(loginPageLocators.txtUserName.value, { timeout: 60000 }).should(($ele) => {
            expect($ele).to.have.value('testing user name');
        });
    }

}
