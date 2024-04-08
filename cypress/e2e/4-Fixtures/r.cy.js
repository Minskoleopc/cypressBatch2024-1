import examples from '../../fixtures/examples.json';
/// <reference types="cypress" />

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     email:"chinmaydeshpande010@gmail.com",
//     msg:"I am learning javascript"
// }

let students = [
    {
        firstName: "chinmay",
        lastName: "deshpande",
        email: "chinmaydeshpande010@gmail.com",
        msg: "I am learning javascript"
    },
    {
        firstName: "amol",
        lastName: "rao",
        email: "amolrao90@gmail.com",
        msg: "I am learning sql"
    },
    {
        firstName: "sarika",
        lastName: "pansare",
        email: "sarikapansare@gmail.com",
        msg: "I am learning cypress"
    }


]


describe('fixtures in cypress', function () {


    // before(() => {
    //     cy.fixture('example').as('data')
    // })

    // beforeEach(function () {
    //     cy.fixture('examples').then(function (data) {
    //         this.data = data
    //     })
    // })

    // it('object', function () {
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type(chinmay.firstName)
    //     cy.get('input[name="last_name"]').type(chinmay.lastName)
    //     cy.get('input[name="email"]').type(chinmay.email)
    //     cy.get('textarea[name="message"]').type(chinmay.msg)
    // })

    // it.only('array', function () {
    //     students.forEach(function (el, index) {
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(el.firstName)
    //         cy.get('input[name="last_name"]').type(el.lastName)
    //         cy.get('input[name="email"]').type(el.email)
    //         cy.get('textarea[name="message"]').type(el.msg)
    //     })

    // })


    // students.forEach(function (el, index) {
    //     it.only(`array - data ${index+1}`, function () {
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(el.firstName)
    //         cy.get('input[name="last_name"]').type(el.lastName)
    //         cy.get('input[name="email"]').type(el.email)
    //         cy.get('textarea[name="message"]').type(el.msg)
    //     })
    // })

    // it.only('reading fixture file for only one testcase ', function () {
    //     cy.fixture('example').then(function (el) {
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(el.firstName)
    //         cy.get('input[name="last_name"]').type(el.lastName)
    //         cy.get('input[name="email"]').type(el.email)
    //         cy.get('textarea[name="message"]').type(el.msg)
    //     })

    // })

    // it.only('reading fixture file obj -1  beforeeach', function () {

    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type(this.data[0].firstName)
    //     cy.get('input[name="last_name"]').type(this.data[0].lastName)
    //     cy.get('input[name="email"]').type(this.data[0].email)
    //     cy.get('textarea[name="message"]').type(this.data[0].msg)


    // })

    // it.only('reading fixture file obj -2 before each  ', function () {
    //     cy.log(this.data)
    //     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type(this.data[1].firstName)
    //     cy.get('input[name="last_name"]').type(this.data[1].lastName)
    //     cy.get('input[name="email"]').type(this.data[1].email)
    //     cy.get('textarea[name="message"]').type(this.data[1].msg)
    // })


    // it.only('reading fixture file obj -1  before and arrowfunction', function () {
    //     cy.get('@data').then(function (data) {
    //         cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(data.firstName)
    //         cy.get('input[name="last_name"]').type(data.lastName)
    //         cy.get('input[name="email"]').type(data.email)
    //         cy.get('textarea[name="message"]').type(data.msg)
    //     })

    // })

    it.only('reading fixture file obj -1 file import', function () {
       
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(examples[0].firstName)
            cy.get('input[name="last_name"]').type(examples[0].lastName)
            cy.get('input[name="email"]').type(examples[0].email)
            cy.get('textarea[name="message"]').type(examples[0].msg)
    

    })

    it.only('reading fixture file obj -1 file import', function () {
       
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(examples[1].firstName)
        cy.get('input[name="last_name"]').type(examples[1].lastName)
        cy.get('input[name="email"]').type(examples[1].email)
        cy.get('textarea[name="message"]').type(examples[1].msg)


})











})



// object 
// array of objects 
// reading fixture in single testcase 
// reading ficture in beforeEach 
// reading fixture in before using normal fuction and arrow function 
// import the fixture file 