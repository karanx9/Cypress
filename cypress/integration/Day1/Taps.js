describe('Taps', () => {
    it('test1', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.xpath("//*[.='Open Tab']").invoke('removeAttr','target').click();
       
        cy.origin('https://www.qaclickacademy.com/',()=>{
          
        cy.contains('Access all our Courses').click();

        })
    });
});

it('Test 2', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.xpath('//*[.="Open Window"]').invoke('removeAttr','onclick').click();

    cy.origin('https://www.qaclickacademy.com/',()=>{
    cy.visit('')
    cy.contains('Access all our Courses').click();
    
});

});