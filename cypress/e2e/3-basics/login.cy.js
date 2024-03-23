/// <reference types="cypress" />

// test scenario - 1
describe('validate the login functionality',function(){

    // test case 1
    it('login with valid crendentials',function(){

        // arrangement 
        cy.visit('https://www.saucedemo.com/v1/')
        // actions
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        // assertion
        cy.get('.app_logo').should('be.visible')



    })

    // test case 2
    it('login with invalid credentials',function(){


    })


})

//