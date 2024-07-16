describe('webtable', () => {
    it('test 1', () => {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.xpath('//table[@name="courses"]/tbody/tr[3]/td[2]').should('include.text','Learn SQL in Practical + Database Testing from Scratch')

    });

    it('Test 2', () => {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


        cy.xpath('//table[@name="courses"]/tbody/tr[9]/td').each(($element)=>{

            if($element.text().includes('Python')){
                cy.wrap($element).next().then()
            }
        })
    });
});

