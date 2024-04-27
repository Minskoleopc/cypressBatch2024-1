/// <reference types="cypress" />

describe('verify the shadow element', function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('firstway to get element in shadowdom', function () {
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        //cy.get('#pizza').should('be.visible')

        // 1st traverse
        //cy.get('#userName').shadow().find('#app2').shadow().find('#pizza').type('Hello')

        cy.wait(20000)
        // add to global config

        // change for a particular testcase
        cy.get('#pizza',{includeShadowDom:true}).should('be.visible').type("hello")




    })


})