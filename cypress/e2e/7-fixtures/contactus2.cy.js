/// <reference types="cypress" />

let data = undefined
describe(' fixture to be read in multiple files ',function(){

     beforeEach(function () {
        cy.fixture('examples').then(function (data) {
            this.data = data
        })
    })


    it('test case one - array one object',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.data[0].firstName)
        cy.get('input[name="last_name"]').type(this.data[0].lastName)
        cy.get('input[name="email"]').type(this.data[0].email)
        cy.get('textarea[name="message"]').type(this.data[0].msg)

    })

    it('test case two - array second object',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.data[1].firstName)
        cy.get('input[name="last_name"]').type(this.data[1].lastName)
        cy.get('input[name="email"]').type(this.data[1].email)
        cy.get('textarea[name="message"]').type(this.data[1].msg)
        
    })




})