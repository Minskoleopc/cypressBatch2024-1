/// <reference types ="cypress"/>

describe('mouse actions ',function(){
    it('Drag and Drop',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove',{which:1})
        .trigger('mouseup',{force:true})
        cy.get('#droppable').should('contain',"Dropped")
    })

    it('Double click',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        //cy.get('#double-click').trigger('dblclick').should('have.class','double')
        cy.get('#double-click').dblclick().should('have.class','double')
    })

    it('Righ click',function(){
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        cy.get('.context-menu-one').first().rightclick()
        //cy.get('.context-menu-one').first().trigger('contextmenu')
        cy.get('body > ul > li.context-menu-item.context-menu-icon.context-menu-icon-cut > span').should('be.visible')
    })

    it('Mouse over',function(){
        cy.visit('https://demo.opencart.com/')
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('not.be.visible')
        cy.get('#narbar-menu > ul > li:nth-child(1) > a').trigger('mouseover').click()
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('be.visible')
    })

})