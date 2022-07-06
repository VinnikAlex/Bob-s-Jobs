
var assert = chai.assert;


describe("Level 4b", () => {

  
    it("L4b login with correct user details", () => {

      const username = 'bob'
      const password = 'bobalooba'
      cy.visit('http://localhost:8083/')
      cy.wait(100)
      cy.get('input[name="username"]').type(username)
      cy.get('input[name="password"]').type(password)

      cy.get('#loginbutton').click()
      cy.contains("Logged in as " + username)
      cy.get("#logoutbutton")

      cy.get('input[name="username"]').should('not.exist')
      cy.get('input[name="password"]').should('not.exist')

    })

    
});