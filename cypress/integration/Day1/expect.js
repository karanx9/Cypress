describe('Orange', () => {
    it('test1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').then(($username)=>{
            expect($username).to.have.attr('placeholder','Username')
            
            cy.wrap($username).type('Admin')


        cy.get('input[name="password"]').then(($password)=>{

            expect($password).to.have.attr('placeholder','Password')

            cy.wrap($password).type('admin123')

            cy.get(".oxd-button").then(($login)=>{

                
                cy.wrap($login).click();


            cy.get('p[class=oxd-userdropdown-name]').then(($menu)=>{
                cy.wait(2000);

                cy.get('p[class=oxd-userdropdown-name]').click()
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click()



              

            }) 

            })

        })    
                
        
        })
    });
});