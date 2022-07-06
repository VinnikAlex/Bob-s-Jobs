
var assert = chai.assert;

describe("Level 3b", () => {


    it("L3a Strapi server is running on port 1337 and the endpoints are in place", () => {

        cy.request('http://localhost:1337/api/jobs')
        .then(response => {
            expect(response.body).to.have.property('data')
            expect(response.body.data.length).to.equal(25)
        })
    })

    it("L3a Job data has the right fields", () => {

        cy.request('http://localhost:1337/api/jobs')
        .then(response => {
            expect(response.body).to.have.property('data')
            const job = response.body.data[0]
            expect(job).to.have.property('attributes')
            expect(job.attributes).to.have.property('title')
            expect(job.attributes).to.have.property('description')
            expect(job.attributes).to.have.property('type')
            expect(job.attributes).to.have.property('location')
        })
    })

    it("L3a Company data has the right fields", () => {

        cy.request('http://localhost:1337/api/companies')
        .then(response => {
            expect(response.body).to.have.property('data')
            const job = response.body.data[0]
            expect(job).to.have.property('attributes')
            expect(job.attributes).to.have.property('name')
            expect(job.attributes).to.have.property('logo')
            expect(job.attributes).to.have.property('url')
        })
    })
  
})