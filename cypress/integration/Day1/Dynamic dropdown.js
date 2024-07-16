describe('dynamic dropdown testing', () => {
    it('test 1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('.ui-autocomplete-input').type('in')

        cy.get('.ui-menu-item').each(($options)=>{
            if($options.text()=='Finland'){
                cy.wrap($options).click()
            }
        })

    });
});