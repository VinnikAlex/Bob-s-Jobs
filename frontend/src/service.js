/** @format */

// service.js
// Alexander Vinnik
// 45970548

export { Auth };

//handles user authentication
const Auth = {
  userData: null,

  login: function (authInfo) {
    fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(authInfo),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Well Done!");
        console.log("The response data is: ", data);
        this.userData = data;

        let event = new CustomEvent("userLogin");
        window.dispatchEvent(event);
      });
  },

  // This gets the JSON Web Token, used for later authentication
  getJWT: function () {
    if (this.userData) {
      return this.userData.jwt;
    } else {
      return null;
    }
  },

  getUser: function () {
    if (this.userData) {
      return this.userData.user;
    } else {
      return null;
    }
  },
};
