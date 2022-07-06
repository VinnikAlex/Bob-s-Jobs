
var assert = chai.assert;

describe("Level 3d", () => {

    it("L3d Search box on every page", () => {
     
            cy.visit('http://localhost:8083/');
            cy.wait(100);
            cy.get('input[id="search"]')
              .should('be.visible')
            cy.visit('http://localhost:8083/#!/about');
            cy.wait(100);
            cy.get('input[id="search"]')
              .should('be.visible')
            cy.visit('http://localhost:8083/#!/help');
            cy.wait(100);
            cy.get('input[id="search"]')
              .should('be.visible')
 
    })


    it("L3d Search box searches job descriptions", () => {

            const searchterm = 'CircleCI'
            cy.visit('http://localhost:8083/');
            cy.wait(100);
            cy.get('input[id="search"]')
              .should('be.visible')
              .type(searchterm)
            cy.get('#searchbutton')
              .should('be.visible')
              .click()
            cy.wait(100)
            // check for jobs matching search term
            // should be three matches, all engineers with remote location
            cy.get(".job")
              .should('have.length', 3)
              .each($job => {
                cy.wrap($job)
                  .contains('Engineer')
                cy.wrap($job)
                  .contains('Remote')
              })
            })

            
});