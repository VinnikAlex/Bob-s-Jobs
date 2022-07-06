
var assert = chai.assert;


describe("Level 3e", () => {

    it("L3e Search results on #!/search/<term>", () => {
    
        const searchterm = 'flumox'
        cy.visit('http://localhost:8083/');
        cy.wait(100);
        cy.get('input[id="search"]')
          .should('be.visible')
          .type(searchterm)
        cy.get('#searchbutton')
          .should('be.visible')
          .click()
        cy.wait(100)
        // check that the url has changed
        cy.window().then(win => {
          expect(win.location.hash).to.equal('#!/search/'+searchterm)
        })
    })
    
    it("L3e Requesting search page performs a search", () => {
    
      const searchterm = 'CircleCI'
      cy.visit('http://localhost:8083/#!/search/'+searchterm)
      cy.wait(100)
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