document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the entered username and password
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform login validation (You can replace this with your own logic)
  if (username === "admin" && password === "password") {
    // Redirect to the dashboard page
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});