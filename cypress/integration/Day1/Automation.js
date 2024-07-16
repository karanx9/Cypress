describe('Automation', () => {
    it('test', () => {

        cy.visit('https://automationteststore.com/')

        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()

        cy.get('input[name="first_name"]').type('karan soni')
        
        cy.get('#ContactUsFrm_email').type('L@gmail.com')

        cy.get('textarea[name="enquiry"]').type('Give me details of product listing')
        
        cy.get('button[title="Submit"]').click()
        
    });
});