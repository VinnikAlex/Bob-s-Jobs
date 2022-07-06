
var assert = chai.assert;

describe("Level 3c", () => {

    it("L3c job list comes from the API and is in publishedAt order", () => {

        cy.request('http://localhost:1337/api/jobs?sort[0]=publishedAt%3Adesc')
        .then(response => {

            const jobs = response.body.data

            cy.visit('http://localhost:8083/');
            cy.wait(100);
            
            cy.get(".job").should('have.length', 10)
            // should contain the first ten job titles
            jobs.slice(0,10).forEach((job) => {
                cy.contains(job.attributes.title)
                cy.contains(job.attributes.type)
                cy.contains(job.attributes.location)
                
                cy.get('a')
                .contains(job.attributes.title)
                .should('have.prop', 'href')
                .and('include', '/#!/jobs/' + job.id)
            })
            // we should also check that the other jobs 
            // aren't here but the titles are too similar 
            // and so occur in the 10
        })
    })
    
    
});