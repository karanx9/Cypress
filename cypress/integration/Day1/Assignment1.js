describe('Google', () => {
    it('test1', () => {

        cy.visit('https://the-internet.herokuapp.com/')
        cy.title().should('include','The Internet')

        

    

        
    });
});

it('Test2', () => {

    cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1')

    cy.get('div[id="start"]').click()
    cy.get('div[id="finish"]').should('not.be.visible')

    
});

it('Test 3', () => {
    cy.visit('https://www.google.com/').type('Masai')

   cy.get('Masai School Course').should('have.value','Masai School Course')
});