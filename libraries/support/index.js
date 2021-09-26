// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import addContext from 'mochawesome/addContext';
import { onlyOn, skipOn } from '@cypress/skip-test'

Cypress.on('test:after:run',(test, runnable)=>{
        if(test.state=='failed'){
            const scnsht=`${Cypress.config('screenshotsFolder')}/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
            addContext({test}, scnsht);
        }
});

Cypress.on('test:before:run',(test, runnable)=>{
    // //if(test.title=='suit1 - test1'){
    //     onlyOn(test.title=='suit1 - test1', () => {
    //         it('skips the current test in headed mode', () => {
    //           cy.wrap(true).should('equal', true)
    //         })
    //       })
    // //}
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
