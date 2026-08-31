// This script runs on the Admin Login page.

// Find the login form and store it in a variable.
const loginForm = document.getElementById("loginForm");

// Find the message area and store it in a variable.

const formMessage = document.getElementById("formMessage");

// Add a "submit" event listener to the login form.
loginForm.addEventListener("submit", async function (e) {
  // Prevent the browser from doing its normal full-page reload.
  e.preventDefault();

  // Clear any old message.
  formMessage.textContent = "";
  formMessage.className = "";

  // Find the username input.
  const usernameInput = document.getElementById("username");

  // Read the username and remove extra spaces from the beginning and end.
  const username = usernameInput.value.trim();

  // Find the password input.
  const passwordInput = document.getElementById("password");

  // Read the password exactly as typed.
  const password = passwordInput.value;

  // Check whether username or password is empty.
  if (!username || !password) {
    // Display an error message.
    formMessage.textContent = "Please enter both username and password.";

    // Give the message the error CSS class.
    formMessage.className = "message error";

    // Stop the function here.
    return;
  }

  // Start a try block because the network request might fail.
  try {
    // Send the login information to the server.
    const response = await fetch("https://bethesda-cbt-studet-project.onrender.com/api/admin/login", {
      method: "POST",

      // Tell the server that we are sending JSON data.
      headers: {
        "Content-Type": "application/json",
      },

      // Convert the username and password into JSON.
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    // Read the server's JSON response.
    const data = await response.json();

    // Check whether the server returned an error status.
    if (!response.ok) {
      // Display the server's message.
      // If there is no message, use the fallback message.
      formMessage.textContent =
        data.message || "Login failed. Please try again.";

      // Give the message the error CSS class.
      formMessage.className = "message error";

      // Stop the function here.
      return;
    }

    // Login succeeded, so save the authentication token.
    localStorage.setItem("token", data.token);

    // Redirect the user to the admin dashboard.
    window.location.href = "admin-dashboard.html";
  } catch (err) {
    // Display an error if the server could not be reached.
    formMessage.textContent = "Could not reach the server. Please try again.";

    // Give the message the error CSS class.
    formMessage.className = "message error";
  }
});
