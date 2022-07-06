

var assert = chai.assert;


describe("Level 2", () => {

    it("L2c Clicking on a job title should show all of the job details.", () => {


        cy.request('http://localhost:1337/api/jobs?sort[0]=publishedAt%3Adesc')
        .then(response => {

            const jobs = response.body.data

            cy.visit('http://localhost:8083/');
            cy.wait(100);
            // look for links to each job
            // (for some reason #10 fails)
            jobs.slice(0,9).forEach((job) => {
                cy.get('a')
                  .contains(job.attributes.title)
                  .click()
                cy.wait(100)
                cy.contains(job.attributes.title)
                // job description should be the literal HTML
                cy.get('.job-description').invoke('html').should('contain', job.attributes.description.slice(0,50))
                cy.go('back')
            })

        })
    })
    

    it("L2d The job page should have a link back to the home page", () => {

        cy.request('http://localhost:1337/api/jobs?sort[0]=publishedAt%3Adesc')
        .then(response => {

            const jobs = response.body.data

            cy.visit('http://localhost:8083/');
            cy.wait(100);
            const job = jobs[0]
            cy.get('a')
                .contains(job.attributes.title)
                .click()
            cy.get('a')
            .should('have.prop', 'href')
            .and('include', '/#')
            
        })
    })
    

    it("L2e The company name on a job page is a link to show the company details", () => {


        cy.request('http://localhost:1337/api/jobs?populate=*')
        .then(response => {

            const jobs = response.body.data

            const job = jobs[Math.floor(Math.random()*jobs.length)]

            cy.visit('http://localhost:8083/#!/jobs/' + job.id )
            cy.wait(100)
            cy.get('a')
            .contains(job.attributes.company.data.attributes.name)
            .should('have.prop', 'href')
            .and('include', '/#!/companies/' + job.attributes.company.data.id)
        })
    })    
    

    it("L2f The company page shows a list of all jobs advertised by that company", () => {
        

        cy.request('http://localhost:1337/api/jobs?populate=*')
        .then(response => {

            const jobs = response.body.data

            const job = jobs[Math.floor(Math.random()*jobs.length)]
            const company = job.attributes.company.data
            cy.visit('http://localhost:8083/#!/companies/' + company.id )
            cy.wait(100)

            const companyJobs = jobs.filter((job) => {
                return (job.attributes.company.data.id === company.id)
            })
            cy.get(".job").should('have.length', companyJobs.length)
            companyJobs.forEach((jj) => {
                cy.contains(jj.attributes.title)
                cy.contains(jj.attributes.type)
                cy.contains(jj.attributes.location)
            })
        })

    })
    
    it("L2g Accessing an unknown URL shows a message including Page Not Found", () => {
        
        // make a random string that will be an unknown fragment
        const fragment = Math.random().toString().substring(2, 8)
        cy.visit('http://localhost:8083/#!/' + fragment)
        cy.contains('Page Not Found', {matchCase: false})

    })
    
    
});