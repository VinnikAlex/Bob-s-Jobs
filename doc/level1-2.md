# Level 1 and 2 Requirements

## Level 1 

The requirements for this level are:

1. Your application page should have the main title "Bob's Jobs".  

2. Your page links to a CSS stylesheet that provides a design for
the application.  If you wish, you can base this on the design that
you made for the first assignment.  

3. There is a link on the home page with the text `About Us` and URL `/#!/about` which
when clicked displays a page describing "Bob's Jobs".  You can add
some suitable text to this page but it must include the text
`"Bob's Jobs is a revolution in career planning brought to you
by Bob Bobalooba himself!"`

4. There is a link on the home page with the text `Applicant Help` and URL `/#!/help`
which when clicked displays a page of help for people applying
for jobs.  You can add some suitable text to this page but it
must include the text `"Be sure to he honest in your application!"`.

5. There is a __navigation menu__ inside a `<nav>` element
in every page that contains links
to: Home (`/`), About Us and Applicant Help.   The current page should
be highlighted by adding the class `selected` to the element that contains
the link.  For example `<li class=selected><a href="/">Home</a></li>`.  

## Level 2 

The requirements for this level are:

1. The home page should display
the first ten jobs (in the order supplied)
from the job list on the main page of the app.  The job
list should show only the `title`, `location`, `type` and the name of the
company.  Each job should be contained in a `<div class=job></div>` element.

2. The `title`
of each job should be a hyperlink to the individual job page.  The
format of the hyperlink is `/#!/jobs/NNN` where `NNN` is the value
of the `id` field of the job.

3. When I click on the link for an individual job I should
be shown all of the relevant details of that job in a readable presentation, including the description.Note that the description field contains HTML code which should be rendered
as part of the page that you display inside a `<div class="job-description">`. 

4. The page that is displayed for an individual job should contain a navigation
link back to the home page (`/#`).  Clicking on this link should display
the list of jobs again.

5. In the main page and in the page showing an individual job,
the company name is a hyperlink. The format of the hyperlink is
`/#!/companies/NNNN` where `NNNN` is the `id` field of the company.

6. Clicking on that link displays
a page showing the details of that company.  The page also shows
a list of all jobs advertised by that company in the same format
as the main page.

7. If a URL path that is unknown is used, then an error page is
shown with a message including the text "Page Not Found". For example,
if I request `/#!/unknown` it would show this error page.  The same
page would be shown for a job or company that can't be found, eg.
`/#!/jobs/9999999` or `/#!/companies/999999999`.  

__This is the first submission point.__  Passing the automated tests
up to this point is worth 5 of the total 35 marks.