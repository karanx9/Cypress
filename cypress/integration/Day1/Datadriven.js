before(() => {
  //configure example.json
  cy.fixture('example').then((data)=>{

    globalThis.data=data; //initializing data from example.json to the data variable.
  })  
});


describe('Data driven', () => {
    it('login test', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//enter values from example.json
        cy.get("input[name='username']").type(data.username)

        cy.get("input[name='password']").type(data.password)

        cy.get("button.oxd-button").click()  

    });
});