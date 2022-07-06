
var assert = chai.assert;


describe("Level 4a", () => {

    it("L4a there is a login form one every page", () => {

        cy.visit('http://localhost:8083/');
        cy.wait(100);
        cy.get('input[name="username"]')
          .should('be.visible')
        cy.get('input[name="password"]')
          .should('be.visible')
        cy.get('#loginbutton')
          .should('be.visible')

        
        cy.visit('http://localhost:8083/#!/about');
        cy.wait(100);
        cy.get('input[name="username"]')
        .should('be.visible')
        cy.get('input[name="password"]')
        .should('be.visible')
        cy.get('#loginbutton')
          .should('be.visible')

        cy.visit('http://localhost:8083/#!/help');
        cy.wait(100);
        cy.get('input[name="username"]')
        .should('be.visible')
        cy.get('input[name="password"]')
        .should('be.visible')
        cy.get('#loginbutton')
          .should('be.visible')
    
    })

    
});