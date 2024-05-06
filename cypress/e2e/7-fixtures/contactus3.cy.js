import data from "../../fixtures/examples.json"
/// <reference types="cypress" />
describe('validate data-set with same testcase',function(){

    data.forEach(function(info,index){
        it(`test-data ${index+1}`,function(){

            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(info.firstName)
            cy.get('input[name="last_name"]').type(info.lastName)
            cy.get('input[name="email"]').type(info.email)
            cy.get('textarea[name="message"]').type(info.msg)


        })


    })



})