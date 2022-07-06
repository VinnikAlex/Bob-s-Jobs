# COMP2110 Bob's Jobs Frontend

This project implements the front-end code for Bob's Jobs.

Tests 3 and 4 descriptions

Level 3a:
Installed all neccessarry files/tests in order to start setting up Strapi backend. This included running 'npx create-strapi-app@latest backend --quickstart' in the main directory, then running 'npm run backend' to launch the administrator panel which gives access to start editing the backend. Once in the administration panel i was able to create Company, Job and Job application collection types and describe the properties of each type including relations with eachother. I then had to enable multiple permissions on all of my models to allow access by the Public role. After all these steps were taken i ran 'npm run sampledata' which was provided in the Strapi config file, this populated my Company and Job field with appropriate data.

After this process i was able to query API requests towards my Strapi database and continue working on my website. This process enables me to fetch any details about specific/all Job and Company attributes which i later implemented on the frontend.

Level 3b:
Level 3b involved the same process as 3a but was tested to see if my Strapi API returned the correct results for Job/Company attributes.

Level 3c:
This level needed me to order all jobs on my home page by the the most recent published date. For this step i needed to consult the Strapi documentation in order to find the correct paramaters needed to modify my fetch request accordingly. During this process i also wanted to add a relation for Company data into Job data so that i would be able to access Company data in the same fetch request. This was all done by adding the paramter: 'populate=\*&sort=publishedAt:Desc' at the end of my fetch request.

The result was a home page which was ordered in Descending order of 'publishedAt' and a fetch request which conveniently returns Company data.

Level 3d:
During this phase i had to add a search field into my webpage which was able to provide results with the keyword that the user input into the search parameter. In order to do this i implemented a new fetch function 'loadSearch' which was able to add a filter dynamically based on the '.value' of the searchbar. I then created a new view function which drew the updated results in the main div.

Once completed, the website gained the functionality whereby a user can query a keyword into the search bar and will recieve all jobs containing that keyword in their description, e.g. 'gym' will return only 3 jobs.

level 4a:
In this step i implemented a login form inside the navbar. This is visible on every page of the web app and a user can fill in their details within the specified fields
