const departments = document.getElementById("departments");
const submit = document.getElementById("submit");


document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the entered username and password
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform login validation (You can replace this with your own logic)
  if (username === "sitholet" && password === "Sithole@2024") {
   
    window.location.href = "IT.html";
  }
   else if (departments.value === "option2") {
    if(username === "nkosit" && password ==="Iucma@2023")
    {
       window.location.href = "humanResource.html";
    } }

 else {
      alert("Invalid username or password. Please try again.");
    }
   });





 
