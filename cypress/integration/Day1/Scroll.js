describe('Scroll test', () => {
    it('test1', () => {
        cy.visit('http://google.com/')
        cy.wait(2000)

        cy.get('[title="Search"]').type('Masai{Enter}')
        cy.wait(2000)


        cy.scrollTo(0,3500);
       
    });
});