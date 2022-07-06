# Level 3 and 4 Requirements

These levels involve installing and configuring the backend Strapi server. See
[this document](backend.md) for details of how to do this.
## Level 3

1. Strapi backend configured to store the jobs and company data.  When the server
is running on port 1337 we can access the API and retrieve job and company details.
The endpoints should be `/api/jobs`, `/api/companies` and `/api/job-applications`.

2. Strapi backend API serves Job and Company records with [the correct fields](data.md).

3. The list of jobs on the main page, now generated from the Strapi API,
is in order of the `publishedAt` field
with more recent jobs shown first.   The ten most recent jobs are shown.  

4. There is a search box on every page to allow the user to search for jobs. 
The search box should be an `<input>` element with `id` of `search`. There
should also be a submit button with `id` of `searchbutton`. 
When I enter text into the search box and click the button, a search is performed
and jobs that contain the search term in the `description` field are
listed on the page.  (Note that for this initial implementation, search
terms can be restricted to single words - or more precisely, strings that are
contained in the description).

5. The search results page has the URL '/#!/search/TTTTT' where TTTTT is the 
search term that was entered.  This search term is displayed in the body
of the page in the phrase: `"Search results for 'TTTTT'"`.   Refreshing
the page (or visiting this URL directly) still shows the same result - that
is, I can perform a new search for 'Java' by visiting '/#!/search/Java' (e.g.
if I click on a link sent to me by someone else).

## Level 4

1. If I am not logged in, there is a login form on every page with input
boxes with names `username` and `password` and a button with `id` of `loginbutton`.

2. If I fill in a valid username (`bob`) and password (`bobalooba`) and click
the login button, then I am authenticated against the Strapi backend and a
message is shown in place of the login form `Logged in as bob`.  A 
logout button is also shown with the id `logoutbutton`.  The login form
is no longer shown.

3. If I fill in an invalid username and password and click the login button,
then a message is shown in the page `Invalid Username or Password`.  

4. If I have logged in and the logout button is visible, clicking on the 
logout button logs me out and the login form is displayed again.

5. If I have logged in, then the detail page for any job contains a
`<button>` element with the label `Apply for this Job`.  Clicking on the button
displays a form to create a job application - this should be a `textarea`
input with name `text` and a button labelled `Submit Application`.

6. If I fill in the text for a job application and click on `Submit Application`
my application is submitted and saved and the page now shows the
user page that includes a list of all jobs applied for by this user.  The
list includes at least the title of each job.

7. The page showing the list of jobs applied for by this user has
the URL hash `/#!/me`.  There is a link to this page on every
page if the user is logged in.  Visiting this page at any time
shows a list of the jobs applied for.  The list of jobs includes
at least the title of each job applied for.
