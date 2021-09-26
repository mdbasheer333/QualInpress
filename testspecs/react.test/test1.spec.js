import { } from '../../libraries/testbase/testbase';
import HomePage from '../../pages/HomePage';

describe('suit1', () => {

    it('suit1 - test1', () => {
        cy.fixture('example.json').then((userFixture) => {
            const homePage = new HomePage();
            homePage.formLink.click();
            userFixture.forEach(data => {
                homePage.enterPassword(data.name);
                homePage.enterUserName(data.email);
            });
        });
    })

});
