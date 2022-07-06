/** @format */

// main.js
// Alexander Vinnik
// 45970548

import { split_hash } from "./util.js";
import { homeView, aboutView, helpView, jobView, loginView } from "./view.js";
import { Model } from "./model.js";
import { Auth } from "./service.js";
export { redraw };

// handles redrawing view functions when location.hash changes - e.g. clicking on the about page redraws a new view function, aboutView()
const redraw = () => {
  updateNavBar();
  const pathInfo = split_hash(window.location.hash);

  // displays appropriate view function depending on hash
  if (pathInfo.path === "") {
    const jobs = Model.DATA.allJobs;
    homeView("main", jobs);
  } else if (location.hash === "#!/about") {
    aboutView("main");
  } else if (pathInfo.path === "jobs" && pathInfo.id) {
    console.log(pathInfo.id);
    const job = Model.getJob(pathInfo.id);
    jobView("main", job);
  } else {
    helpView("main");
  }

  bindings();
};

// updates which 'li' element is highlighted based on where the user is located on the website
function updateNavBar() {
  if (location.hash === "") {
    document.getElementById("link1").classList.add("selected");
  } else if (location.hash === "#!/about") {
    document.getElementById("link1").classList.remove("selected");
    document.getElementById("link3").classList.remove("selected");
    document.getElementById("link2").classList.add("selected");
  } else if (location.hash === "#!/help") {
    document.getElementById("link1").classList.remove("selected");
    document.getElementById("link2").classList.remove("selected");
    document.getElementById("link3").classList.add("selected");
  } else {
    let target = document.querySelectorAll("nav li");
    target.forEach(function (target) {
      target.classList.remove("selected");
    });
  }
}

// handles the search button event onclick
function search_button_handler(event) {
  // prevents button from reloading page
  event.preventDefault();
  console.log("handler works");
  Model.loadSearch();
}

// handles the authentication process
function login_form_handler(event) {
  // prevents button from reloading page
  event.preventDefault();
  console.log("the login form is ", this);
  const username = this.elements["username"].value;
  const password = this.elements["password"].value;

  const authInfo = {
    identifier: username,
    password: password,
  };

  //send authInfo to backend for user authentication
  Auth.login(authInfo);
}

// handles buttons being pressed
function bindings() {
  let loginform = document.getElementById("login-form");
  loginform.onsubmit = login_form_handler;

  let searchbutton = document.getElementById("searchbutton");
  searchbutton.onclick = search_button_handler;
}

// triggers loginView() once user clicks the login button
window.addEventListener("userLogin", function (e) {
  console.log("userLogin triggered");
  loginView(login, Auth.getUser());
});

window.onload = Model.loadData;
window.onhashchange = redraw;
