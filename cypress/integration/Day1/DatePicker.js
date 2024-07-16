describe('Date picker', () => {
    it('test1', () => {
        
       cy.visit('https://jqueryui.com/datepicker/')

       cy.frameLoaded('.demo-frame');

       cy.iframe().contains('Date:').type('07/13/2024{enter}');


    });
});