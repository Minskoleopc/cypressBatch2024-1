/// <reference types="cypress" />

describe('verify the radio button', function () {
    this.beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('verify the radio button', function () {

        //click()
        // cy.get('input[value="green"]').click()
        // cy.get('input[value="green"]').should('be.checked')
        // cy.get('input[value="blue"]').should('not.be.checked')

        // cy.get('input[value="green"]').as('greenRadio')
        // cy.get('@greenRadio"]').check()
        // cy.get('@greenRadio"]').should('be.checked')

        cy.get('#radio-buttons').children().filter('input[type="radio"]').each(function (el) {
            cy.wrap(el).check()
            cy.wrap(el).should('be.checked')
        })

    })

    it('verify the functionality of check box with check', function () {
        cy.get('input[type="checkbox"]').each(function (el) {
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
    })

    it('verify the functionality of check box with loop', function () {
        cy.get('input[type="checkbox"]').each(function (el) {
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })
    })

    it('verify the functionality of check box with click', function () {
        cy.get('input[type="checkbox"]').each(function (el,index) {
           if(index != 2){
            cy.wrap(el).click()
           }
        })
    })

    it('verify the functionality of check box - multiple', function () {
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4'])
    })

    it('selecting the dropdown - one',function(){
        // text
        //cy.get('#dropdowm-menu-1').select('Python')
        // value attribute
        cy.get('#dropdowm-menu-1').select('python')

    })

    it('selecting the dropdown - one',function(){
        let selection = ["java","maven","css"] 
        cy.get('.section-title').first().find('select').each(function(el,index){
            cy.wrap(el).select(selection[index])
        })

    })

    it.only('verify the disable enabled , and selected radio button',function(){
        cy.get('input[value = "cabbage"]').should('be.disabled')
        cy.get('input[value = "lettuce"]').should('not.be.disabled')
        cy.get('input[value = "pumpkin"]').should('be.checked')
    })













})