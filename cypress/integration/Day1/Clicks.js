describe('Clicks', () => {
    it('tests 1', () => {

        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

       

        cy.xpath('//button').dblclick();

    });

        it('Test 2', () => {
            
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

            cy.get('button[id="mousehover"]').invoke('show')

            cy.contains('Top').click({force:true});

            cy.url().should('include','top');
        });

        it('Test3', () => {
            
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

            cy.get('button[id="mousehover"]').trigger('button[id="mousehover"]')

            cy.contains('Top').click({force:true})

            cy.url().should('include','top');
        });
        
   
});