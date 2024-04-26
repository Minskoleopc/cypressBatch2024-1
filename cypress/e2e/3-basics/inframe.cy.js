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

    it('iframe 3 - javascript',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        let frame = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        frame.find('a[href= "index.html"]').should('have.text',"Home")
    })

    
    it.only('iframe 4 - javascript',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.getIframeBody('frame').find('a[href= "index.html"]').should('have.text',"Home")
        
    })

    it.only('iframe 5 - javascript',function(){
        cy.visit('https://the-internet.herokuapp.com/tinymce')
        cy.getIframeBody('mce_0_ifr').find('p')
        .should('have.text','Your content goes here.')
        cy.getIframeBody('mce_0_ifr').find('p').type(`{ctrl+a}{ctrl+b}`)
        cy.get('strong').first().should('have.text','Your content goes here.')
        
    })






})


