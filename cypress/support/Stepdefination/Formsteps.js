import{Given,when,Then,And} from"cypress-cucumber-preprocessor/steps"

Given('User open the simple form url',()=>{

    cy.visit('https://v1.training-support.net/selenium/simple-form')

})

when('user entered firstname,lastname,email,message',()=>{

    cy.get('#firstName').type('Karan')
    cy.get('#lastName').type('Soni')
    cy.get('#email').type('bussinesskaran6@gmail.com')
    cy.get('#number').type('9403343224')
    cy.get('textarea[rows]').type('Hello')


})

And('click on submit',()=>{

    cy.get('input[type="submit"]').click()

})

Then('An alert saying successful message has to be displayed.',()=>{

    cy.get('window:confirm',(msg)=>{

        expect(msg).to.equal('Thank You for reaching out to us, Karan Soni')

    })


})