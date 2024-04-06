/// <reference types="cypress" />

describe('verify the radio button', function () {
    this.beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it.only('verify the radio button', function () {

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

    it.only('verify the functionality of check box', function () {
        cy.get('input[type="checkbox"]').each(function (el) {
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })



    })


})