describe('Dropdown', () => {
    it('Test1', () => {
        
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

       cy.get('#dropdown-class-example').select('option2').should('have.value','option2')
       
       cy.get('#dropdown-class-example').select('option1').should('have.value','option1')
       
       cy.get('#dropdown-class-example').select('option3').should('have.value','option3')
    });
});