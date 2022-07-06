

var assert = chai.assert;


describe("Level 4d", () => {

    it("L4d logout button works", () => {

      const username = 'bob'
      const password = 'bobalooba'
      cy.visit('http://localhost:8083/');
      cy.wait(100);
      cy.get('input[name="username"]').type(username)
      cy.get('input[name="password"]').type(password)

      cy.get('#loginbutton').click()
      cy.contains("Logged in as " + username)
      cy.get("#logoutbutton").click()

      cy.get('input[name="username"]')
      .should('be.visible')
      cy.get('input[name="password"]')
      .should('be.visible')
      cy.get('#loginbutton')
        .should('be.visible')

      cy.get('#logoutbutton').should('not.exist')
    })

    
});