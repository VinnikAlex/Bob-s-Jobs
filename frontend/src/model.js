/** @format */

// model.js
// Alexander Vinnik
// 45970548

import { redraw } from "./main.js";
import { errorView, searchView, clearContent } from "./view.js";
export { Model };

const Model = {
  jobs_url: "http://localhost:1337/api/jobs?populate=*&sort=publishedAt:Desc",

  // Model will hold the data stored in the model
  DATA: {
    allJobs: [],
    jobs: [],
    searchJobs: [],
  },

  initialiseAPI: {
    // // fetch jobs data from backend
    loadData: () => {
      fetch(Model.jobs_url)
        .then((response) => {
          // console.log(response);
          return response.json();
        })
        .then((data) => {
          Model.DATA.allJobs = data.data;
          // console.log("jobs loaded:", Model.DATA.allJobs);
          redraw();
        });
    },

    // extracts user input from search bar and fetches from the backend with user input as the filter - e.g. if user input is 'gym', fetch request will add 'gym' as a filter
    loadSearch: () => {
      console.log("LOAD SEARCH IS RUNNING");
      // retrieves user input from the search bar
      let val = document.getElementById("search").value;
      fetch(
        "http://localhost:1337/api/jobs?populate=company&filters[description][$containsi]=" +
          val
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          Model.DATA.searchJobs = data.data;
          if (Model.DATA.searchJobs.length > 0) {
            clearContent("main");
            searchView("main", Model.DATA.searchJobs, val);
          } else {
            errorView();
          }
        });
    },
  },

  // Retrieves the individual job details
  getJob: (id) => {
    for (let i = 0; i < Model.DATA.allJobs.length; i++) {
      if (Model.DATA.allJobs[i].id == id) {
        return Model.DATA.allJobs[i];
      }
    }
    return null;
  },

  // Retrieves all jobs in Strapi Database
  getJobs: () => {
    return Model.DATA.allJobs;
  },
};
