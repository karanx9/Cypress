describe('checkboxes testing', () => {
    it('test1', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath('(//input[@class="radioButton"])[1]').check().should('be.visible').and('be.checked')
        
        cy.xpath('(//input[@class="radioButton"])[2]').check().should('be.visible').and('be.checked')

        cy.xpath('(//input[@class="radioButton"])[3]').check().should('be.visible').and('be.checked')


        cy.xpath('(//label/input[@type="checkbox"])[1]').check().should('be.visible')
        

        cy.xpath('(//label/input[@type="checkbox"])[2]').check().should('be.visible')


        cy.xpath('(//label/input[@type="checkbox"])[3]').uncheck().should('not.be.checked')
    });
});