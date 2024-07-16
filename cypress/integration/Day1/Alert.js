describe('Alert testing', () => {
    it('tets 1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('//input[@id="alertbtn"]').click()  

        cy.on('window:alert',(alert)=>{
            expect(alert).to.equal('Hello , share this practice page and share your knowledge')
            return true
        })

        cy.get('#confirmbtn').click()

        cy.on('Window:confirm',(msg)=>{
            expect(msg).to.equal('Hello , Are you sure you want to confirm?')
            return true
        })


    });
});