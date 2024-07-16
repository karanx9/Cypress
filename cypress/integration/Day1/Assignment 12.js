describe('Assignment 12', () => {
    it('test 1', () => {
        
cy.visit('https://demo.openmrs.org/openmrs/referenceapplication/home.page')

cy.get('input[name="username"]').type('admin');
cy.get('input[name="password"]').type('Admin123');
cy.get('li[id="Pharmacy"]').click();
cy.get('input[id="loginButton"]').click();

cy.wait();




    });
});