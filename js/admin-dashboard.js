// This script runs on the Admin Dashboard page and only handles logging out.
// Logging out just means deleting the saved token — there is no server call needed.

// Find the logout button and store it in a variable
const logoutBtn = document.getElementById("logoutBtn");

// 1. Add a "click" event listener to logoutBtn.
//    The listener function does not need any parameters.

// Inside the event listener function, do the following, IN THIS ORDER:

// a. Remove the saved login token from local storage
//    (call localStorage.removeItem("token"))

// b. Redirect the browser back to the login page by setting
//    window.location.href to "admin-login.html"
