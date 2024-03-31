/// <reference types="cypress" />

describe('learn basic commands',function(){

    it('how to get title',function(){
        cy.visit('https://www.google.com/')
        cy.title().should('contain','Google')
    })

    it('how to get the currect url in cypress',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.url().should('contain',"contactus")
    })

    it('how to get elements in cypress',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // how to get one element 
        cy.get("h2[name='contactme']").should('have.attr','class','section_header')
        cy.contains('CONTACT US').should('have.attr','name','contactme')
        // how to multiple elements 
        cy.get('input[name]').should('have.length',3)
        // how to get elements inside a node 
        // default cypress way to get the element - css
    })

    //Defect - 12314434 , US - US1243234234
    it.skip('how to get elements in cypress',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('label').contains('Option 1').should('be.visible')
    })

    it.only('how to get elements in cypress',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.wait(2000)
        cy.log('2 second wait over')
        cy.get('label').contains('Option 1').should('be.visible')
        cy.log('assertion done')
        cy.reload()
        cy.log('reload done')
    })



})