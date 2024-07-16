describe('drag and drop', () => {
    it('test1', () => {
        
        cy.visit('https://v1.training-support.net/selenium/drag-drop')

        cy.get('#draggable').trigger('mousedown',{which:1})

        //which 1 is left button of mouse
        //which 2 is center button 
        //which 3 is for right button.

        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true});
        

    });
});

it('test 2', () => {
    
    cy.visit('https://v1.training-support.net/selenium/drag-drop')

        cy.get('#draggable').trigger('mousedown',{which:1})

        cy.get('#dropzone2').trigger('mousemove').trigger('mouseup',{force:true})
});

