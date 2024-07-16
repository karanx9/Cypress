class Logout_po{


logout(){
     
    cy.get('img[class="oxd-userdropdown-img"]').click();

    cy.get('ul[class="oxd-dropdown-menu"]').find(".oxd-userdropdown-link").should('have.length',4)

    cy.get('a[href="/web/index.php/auth/logout"]').click();



    }
}

export default Logout_po;