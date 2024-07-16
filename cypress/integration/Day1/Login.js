describe('Orange HRM', () => {
    it('login tet', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("input[name='username']").type('Admin')

        cy.get("input[name='password']").type('Admin@123')

        cy.get("button.oxd-button").click()
    });
});