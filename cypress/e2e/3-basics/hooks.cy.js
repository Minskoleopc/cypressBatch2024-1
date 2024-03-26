/// <reference types="cypress" />

before(function(){
    cy.log("First ------ A")
})

beforeEach(function(){
    cy.log("I will run before every testcase")
})

it('test case one',function(){
    cy.log("test case one executed")
})

it('test case two',function(){
    cy.log("test case two executed")
})

afterEach(function(){
    cy.log("I will run after every testcase")
})

after(function(){
    cy.log("Last ---------Z")
})