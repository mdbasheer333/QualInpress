import { } from '../../libraries/testbase/testbase';
import HomePage from '../../pages/HomePage';

describe('its cypress examples', () => {

    it('test cypress methods', () => {

        const homePage = new HomePage();
        homePage.formLink.click();

    });

});
