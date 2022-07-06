
var assert = chai.assert;


describe("Level 1", () => {
 
    it("L1a Has a title Bob's Jobs", () => {
        cy.visit('http://localhost:8083/');
        cy.wait(100);
        cy.contains("Bob's Jobs", { matchCase: false });
    })


    it("L1b Your pages link to a CSS Stylesheet", () => {

        cy.visit('http://localhost:8083/')
        cy.get("link[rel='stylesheet']")
    })   


    it("L1c The home page has a link to About Us", () => {

        cy.visit('http://localhost:8083/');
        cy.wait(100);

        cy.get('a')
        .contains('About Us')
        .should('have.prop', 'href')
        .and('include', '/#!/about')
        .then(href => {
            cy.visit(href)
            cy.contains("Bob's Jobs is a revolution in career planning brought to you by Bob Bobalooba himself!")
        })
    
    })


    it("L1-d The home page has a link to Applicant Help", () => {
        
        cy.visit('http://localhost:8083/');
        cy.wait(100);
        cy.get('a')
        .contains('Applicant Help')
        .should('have.prop', 'href')
        .and('include', '/#!/help')
        .then(href => {
            cy.visit(href)
            cy.contains("Be sure to he honest in your application!")
        })
    })



    it("L1e There is a <nav> menu on every page with links to other pages", () => {
        
        cy.visit('http://localhost:8083/')
        cy.get('nav').within(() => {
            cy.get('a').contains('Home').as('link')

            cy.get('@link')
            .should('have.prop', 'href')
            .and('include', '/#')

            cy.get('@link').parent()
            .should('have.prop', 'class')
            .and('equals', 'selected')
        })

        cy.visit('http://localhost:8083/#!/about')
        cy.get('nav').within(() => {
            cy.get('a').contains('About Us').as('link')

            cy.get('@link')
            .should('have.prop', 'href')
            .and('include', '/#!/about')

            cy.get('@link').parent()
            .should('have.prop', 'class')
            .and('equals', 'selected')
        })

        cy.visit('http://localhost:8083/#!/help')
        cy.get('nav').within(() => {
            cy.get('a').contains('Applicant Help').as('link')

            cy.get('@link')
            .should('have.prop', 'href')
            .and('include', '/#!/help')

            cy.get('@link').parent()
            .should('have.prop', 'class')
            .and('equals', 'selected')
        })
    })
    
});