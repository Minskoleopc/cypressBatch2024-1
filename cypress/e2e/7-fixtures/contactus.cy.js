/// <reference types="cypress" />

describe('verify the contact us form',function(){

    // 1st- way

    // let info = {
    //     firstName:"chinmay",
    //     lastName:"deshpande",
    //     email:"chinmaydeshpande010@gmail.com",
    //     comment:"learning js"
    // }


    it('verify the fixture',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info.firstName)
        cy.get('input[name="last_name"]').type(info.lastName)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name="message"]').type(info.comment)

    })

    // 2nd way reading fixture for one single testcase
    it.only('verify the fixture',function(){
        cy.fixture('example3').then(function(info){

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(info.firstName)
            cy.get('input[name="last_name"]').type(info.lastName)
            cy.get('input[name="email"]').type(info.email)
            cy.get('textarea[name="message"]').type(info.msg)
        })

    })


})