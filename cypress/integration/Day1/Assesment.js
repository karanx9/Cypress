describe('Assessment', () => {
    it('Test1', () => {
        //Visit the website
        cy.visit('https://automationteststore.com/')
        
        //find the Apparael and accessories and click on it 
        cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();
        
       
        
        

        //it willl find white tshirts and click on it.
            cy.get('img[title="T-shirts"]').click()

            cy.get('img[src="//automationteststore.com/image/thumbnails/18/79/t_shirt_63_jpg-100243-250x250.jpg"]').click()

        //it will select the color 1
        cy.get('select[name="option[350]"').select('1');

        //it will select size 2
        cy.get('select[name="option[351]"').select('2');

        //select qty clear the text and type 2.
        cy.get('input[name="quantity"]').clear().type('2');

        //click on add to cart.
        cy.get('a[class="cart"]').click();


        //click on check button
        cy.get('a[class="btn btn-primary"]').click();

        //clcik on guest account and continue
        cy.xpath('//input[@name="account" and @id="accountFrm_accountguest"]').click();

        cy.get('button[title="Continue"]').click();

        ///input details :
        cy.get('input[name="firstname"]').type('Karan')

        cy.get('input[name="lastname"]').type('soni')

        cy.get('input[id="guestFrm_email"]').type('bussinesskaran6@gmail.com');

        cy.get('input[id="guestFrm_telephone"]').type('9403343224')

        cy.get('input[id="guestFrm_address_1"]').type('xyjdshvbsdjvcjsh');

        cy.get('input[name="city"]').type('Aurangabad')

        cy.get('select[id="guestFrm_zone_id"]').click().select('2')

        cy.get('input[name="postcode"]').type('431001')
      
       cy.get('select[id="guestFrm_country_id"]').click().select('2')

       cy.get('button[title="Continue"]').click();


//assert command should be displayed.
       cy.get('button[id="checkout_btn"]').click().should('contains',' YOUR ORDER HAS BEEN PROCESSED!');
    });
});