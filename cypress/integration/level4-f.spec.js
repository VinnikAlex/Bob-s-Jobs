

var assert = chai.assert;


describe("Level 4f", () => {

    it("L4f logged in user sees job application button and form", () => {

      const username = 'bob'
      const password = 'bobalooba'
      cy.visit('http://localhost:8083/');
      cy.wait(100);
      cy.get('input[name="username"]').type(username)
      cy.get('input[name="password"]').type(password)
      cy.get('#loginbutton').click()
      cy.contains("Logged in as " + username)

      cy.request('http://localhost:1337/api/jobs')
      .then(response => {

          const jobs = response.body.data

          const job = jobs[Math.floor(Math.random()*jobs.length)]
          cy.visit('http://localhost:8083/#!/jobs/' + job.id )
          cy.wait(100)
          const btn = cy.get('button')
          btn.contains('Apply for this Job')
          btn.click()
          cy.wait(100)
          cy.get('textarea[name="text"]').type("Please give me a job.")
          cy.get('input[type="submit"]').contains("Submit Application").click()
          cy.wait(100)
          cy.get("html").contains(job.attributes.title)
    })

    })

    
});