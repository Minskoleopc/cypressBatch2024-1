/// <reference types="cypress" />
describe('Iframe',function(){
    it('iframe 1 - jquery',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        //cy.get('a[href= "index.html"]').should('have.text','Home')
        cy.get('#frame').then(function($iframe){
            //cy.log($iframe) // iframe element
            //cy.log($iframe.contents()) # document
            let iframeBody = $iframe.contents().find('body')
            cy.wrap(iframeBody).as('iframe')
            cy.get('@iframe').find('a[href= "index.html"]').should('have.text',"Home")
        })
    })

    it('iframe 2 - javascript',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')

        cy.get('#frame').then(function(iframe){
            let iframeBody =  iframe[0].contentDocument.body
            cy.wrap(iframeBody).as('iframe')
            cy.get('@iframe').find('a[href= "index.html"]').should('have.text',"Home")
        })
    })


    
    it.only('iframe 3 - javascript',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')

        let frame = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        frame.find('a[href= "index.html"]').should('have.text',"Home")

    })







})


