import { } from '../../libraries/testbase/testbase';
import HomePage from '../../pages/HomePage';


describe('suit2', () => {

    it('suit2 - test1', () => {
        const homePage = new HomePage();
        homePage.formLink.click().log(homePage.formLinkDesc)
        homePage.enterPassword("testing");
        homePage.enterUserName("testing user name").verifyValue();

    });

    it('suit2 - test2', () => {
        const homePage = new HomePage();
        homePage.clickOnDummyLink();
    });

});
