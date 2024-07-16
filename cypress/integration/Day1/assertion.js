describe('Assertions', () => {
    it('test 1', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.url().should('include','AutomationPractice')

        cy.title().should('include','Practice Page')

        //check visibility of element.

        cy.get('[name ="show-hide"]').should('be.visible')

        //check invisibility of element.

        cy.get('#hide-textbox').click()

        cy.get('[name ="show-hide"]').should('not.be.visible')

        cy.get('.ui-autocomplete-input').type('Wednesday').should('have.value','Wednesday')





    


         

        
        
    });
});