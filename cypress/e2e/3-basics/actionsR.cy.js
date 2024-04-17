/// <reference types="cypress" />

describe('verify the action commands ',function(){

    it.only('verify the drag and drop operation',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove',{ which: 1}).trigger('mouseup')

    })

})