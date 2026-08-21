// This script runs on the Student Login page.

// Find the login form and store it in a variable
const loginForm = document.getElementById("loginForm");

// Find the message area
const formMessage = document.getElementById("formMessage");

// 1. Add a "submit" event listener to loginForm, for when the form is submitted.
//    The listener function should be declared as "async function (e) { ... }"
//    so that we can use "await" inside it later.

// Inside the event listener function, do the following, IN THIS ORDER:

// a. Prevent the browser's normal full-page reload on submit
//    (call e.preventDefault())

// b. Clear any old message:
//    - set formMessage.textContent to an empty string ""
//    - set formMessage.className to an empty string ""

// c. Find the registration number input using document.getElementById with the id "regNumber"
//    Store it in a variable called regNumberInput

// d. Read the value typed into regNumberInput (regNumberInput.value), remove any
//    extra whitespace from the start/end using .trim(), and store the result
//    in a variable called regNumber

// e. Find the password input using document.getElementById with the id "password"
//    Store it in a variable called passwordInput

// f. Read the value typed into passwordInput (passwordInput.value) and store it
//    in a variable called password
//    (do NOT trim the password — spaces in a password should be kept exactly as typed)

// g. Check whether regNumber is empty OR password is empty
//    (use: if (!regNumber || !password) )
//    If either one is missing:
//      - set formMessage.textContent to "Please enter both registration number and password."
//      - set formMessage.className to "message error"
//      - use "return" to stop the function here — do not continue to step h below

// h. Start a try block, because the network request below might fail
//    (e.g. no internet connection, server not running)

//    Inside the try block, do the following IN ORDER:

//    i. Use "await fetch(...)" to send a request to the URL "/api/student/login"
//       The options object passed to fetch needs:
//         - method: "POST"
//         - headers: an object with "Content-Type" set to "application/json"
//         - body: JSON.stringify() of an object containing regNumber and password
//       Store what fetch returns in a variable called response

//    j. Use "await response.json()" to read and parse the response body as JSON
//       Store the result in a variable called data

//    k. Check "if (!response.ok)" — this is true when the server responded with
//       an error status code (like 400)
//       If so:
//         - set formMessage.textContent to data.message, or, if data.message is
//           missing/empty, use the fallback text "Login failed. Please try again."
//         - set formMessage.className to "message error"
//         - use "return" to stop the function here — do not continue to step l

//    l. If we reach this point, login succeeded.
//       Save the token by calling: localStorage.setItem("token", data.token)

//    m. Redirect the browser to the student's exam list by setting
//       window.location.href to "student-exams.html"

// n. After the try block, add a "catch (err)" block, to handle the case where the
//    request itself failed (e.g. no internet connection, server unreachable)
//
//    Inside the catch block:
//      - set formMessage.textContent to "Could not reach the server. Please try again."
//      - set formMessage.className to "message error"
