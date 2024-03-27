/// <reference types="cypress" />

describe('verify the contact us form',function(){

    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('verify the contact form with valid data',function(){
        cy.formDetails("chinmay","deshpande","chinmaydeshpande010@gmail.com","learning")
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('be.visible').and('have.text','Thank You for your Message!')
    })

    it('verify the contact with invalid data',function(){
        cy.formDetails("chinmay","deshpande","chinmaydeshpande010gmail.com","learning")
        cy.get('input[type="submit"]').click()
        cy.get('body').should('contain',"Invalid")
        
    })

    it('verify the contact form reset button',function(){
        cy.formDetails("chinmay","deshpande","chinmaydeshpande010@gmail.com","learning")
        cy.get('input[type="reset"]').click()
        cy.get('input[name="first_name"]').should('have.text',"")
        cy.get('input[name="last_name"]').should('have.text',"")
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')
    })

})