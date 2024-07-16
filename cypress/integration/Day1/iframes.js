///<reference types="cypress-xpath" />
///<reference types="cypress" />

describe('iframes', () => {
    it('test 1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe');

        cy.iframe().contains('Blog').click()

    });
});