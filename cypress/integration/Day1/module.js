describe('facebook login', () => {
    it('login tet', () => {
        cy.visit('https://www.facebook.com/login/')

        cy.get("#email").type('kkaransoni41@gmail.com')

        cy.get("#pass").type('Karan@123')

        cy.get("#loginbutton").click()
    });
});