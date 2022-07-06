/** @format */

// view.js
// Alexander Vinnik
// 45970548

// view function for displaying job listings
export const homeView = (id, data) => {
  // console.log(data);

  const template = Handlebars.compile(`
          <div class=job>
          <div class=jobHeader>
            <li class="jobheading"><a href="/#!/jobs/{{id}}"><u>{{title}}</u></a></li>
            <img class="jobImage" src={{logo}}>
            </div>
            <li class="company"><b>{{company}}</b><br>{{location}}</li>
            <li class="wfh">{{type}}</li>
            <li class="description">{{{description}}}</li>
          </div>
          <br></br>
            `);

  let list = "";

  // for loop to add all template attributes
  for (let i = 0; i < 10; i++) {
    list += template({
      //slices job description for home view preview
      description: data[i].attributes.description.slice(0, 180) + "...",
      company: data[i].attributes.company.data.attributes.name,
      logo: data[i].attributes.company.data.attributes.logo,
      title: data[i].attributes.title,
      location: data[i].attributes.location,
      type: data[i].attributes.type,
      id: data[i].id,
    });
  }

  let target = document.getElementById(id);
  target.innerHTML = list;
};

// view function for displaying details of each job once clicked
export const jobView = (id, job) => {
  const template = Handlebars.compile(`
            <div class="job-description">
            <h1>{{title}}</h1>
            <p>{{location}}</p>
            <p>{{type}}</p>
            <b></b>
            {{{description}}}
            <b></b>
            </div>
              `);

  let list = "";

  list += template({
    title: job.attributes.title,
    description: job.attributes.description,
    location: job.attributes.location,
    type: job.attributes.type,
  });

  let target = document.getElementById(id);
  target.innerHTML = list;
};

// view function to display information on the about page
export const aboutView = (id) => {
  const content =
    "<p>Bob's Jobs is a revolution in career planning brought to you by Bob Bobalooba himself!</p>";
  let target = document.getElementById(id);
  target.innerHTML = content;
};

// view function to display information on the help page
export const helpView = (id) => {
  const content = "<p>Be sure to he honest in your application!</p>";
  let target = document.getElementById(id);
  target.innerHTML = content;
};

// view function to display the new login form depending on if user is logged in or out
export const loginView = (id, user) => {
  const content = `<p>Logged in as ${user}</p>`;
  let target = document.getElementById(id);
  target.innerHTML = content;
};

// view function to display jobs based on what the user has put into the search field
export const searchView = (id, searchArray, val) => {
  console.log("Search Value:", val);
  console.log(searchArray);

  const template = Handlebars.compile(`
          <div class=job>
          <div class=jobHeader>
            <li class="jobheading"><a href="/#!/jobs/{{id}}">{{title}}</a></li>
            <img class="jobImage" src={{logo}}>
            </div>
            <li class="company">{{company}}</li>
            <li class="location">{{location}}</li>
            <li class="wfh">{{type}}</li>
            <li class="description">{{{description}}}</li>
          </div>
          <br></br>
            `);

  let list = "";

  // for loop to add all template attributes
  for (let i = 0; i < searchArray.length; i++) {
    list += template({
      description: searchArray[i].attributes.description.slice(0, 100) + "...",
      company: searchArray[i].attributes.company.data.attributes.name,
      logo: searchArray[i].attributes.company.data.attributes.logo,
      title: searchArray[i].attributes.title,
      location: searchArray[i].attributes.location,
      type: searchArray[i].attributes.type,
      id: searchArray[i].id,
    });
  }
  let target = document.getElementById(id);
  target.innerHTML = list;
};

// a view function that displays an error if a page doesn't exist
export const errorView = function () {
  let target = document.getElementById("main");
  target.innerHTML = `
  <h1>Page Not Found</h1>
  `;
};

// a view function that clears all content from the 'main' div
export const clearContent = (id) => {
  let tgt = document.getElementById(id);
  if (tgt) tgt.innerHTML = "";
};
