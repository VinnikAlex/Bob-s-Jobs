

var assert = chai.assert;


describe("Level 3a", () => {

    it("L3a Strapi server is running on port 1337 and the endpoints are in place", () => {

        cy.request('http://localhost:1337/api/jobs')
        .its('headers').its('content-type')
        .should('include', 'application/json') 

        cy.request('http://localhost:1337/api/companies')
        .its('headers').its('content-type')
        .should('include', 'application/json') 

        // Removed because of different statement in the textual requirements
        // 
        // requests for job-applications should be blocked 
        // because authentication is required
        // cy.request({
        //     url: 'http://localhost:1337/api/job-applications',
        //     failOnStatusCode: false
        // })
        // .its('status').should('equal', 403)

    })

    
});