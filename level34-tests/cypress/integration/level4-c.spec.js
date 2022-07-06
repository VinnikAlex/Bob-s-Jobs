

var assert = chai.assert;


describe("Level 4c", () => {

    it("L4c login with incorrect user details", () => {

      const username = 'mary'
      const password = 'invalidpassword'
      cy.visit('http://localhost:8083/');
      cy.wait(100);
      cy.get('input[name="username"]').type(username)
      cy.get('input[name="password"]').type(password)

      cy.get('#loginbutton').click()
      cy.contains("Logged in as " + username).should('not.exist')

      cy.contains("Invalid Username or Password")

    })

    
});