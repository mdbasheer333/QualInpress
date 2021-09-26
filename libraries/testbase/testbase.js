import { get_time_stamp } from '../utils';


beforeEach('before each method', () => {
    cy.visit(Cypress.config("baseUrl"));
    console.log("before each method");
});

afterEach('after each method', () => {
    console.log("after each method");
});

before('before once only', () => {
    console.log("before");
    let currenttestresultpath = get_time_stamp();
    console.log(currenttestresultpath);
    //currenttestresultpath="C:\Users\Rasheed\Desktop\Basheer\synepress\testresults\asdasds";
});

after('after once only', () => {
    console.log("after once only");
});

