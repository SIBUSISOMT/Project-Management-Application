// Sample project data
var projects = [];

// Add project to the list
function addProject(name, members) {
  var project = {
    name: name,
    members: members.split(","),
    status: "Not Started"
  };

  projects.push(project);
}


// Render project list
function renderProjects() {
  var projectContainer = document.getElementById("projects");
  projectContainer.innerHTML = ""; // Clear the existing project lists
  
  // Add the project header
  var projectHeader = document.createElement("h2");
  projectHeader.textContent = "Projects";
  projectContainer.appendChild(projectHeader);
  
  projects.forEach(function (project) {
    var projectList = document.createElement("ul");
    projectList.classList.add("project-list"); // Add a class to style each project list
    var listItem = document.createElement("li");
    listItem.textContent = project.name + " - ";
    // Create radio buttons for status selection
    var notStartedRadio = document.createElement("input");
    notStartedRadio.type = "radio";
    notStartedRadio.name = project.name;
    notStartedRadio.value = "Not started";
    notStartedRadio.addEventListener("click", function() {
      project.status = "Not started";
    });
    var inProgressRadio = document.createElement("input");
    inProgressRadio.type = "radio";
    inProgressRadio.name = project.name;
    inProgressRadio.value = "In-progress";
    inProgressRadio.addEventListener("click", function() {
      project.status = "In-progress";
    });
    var completeRadio = document.createElement("input");
    completeRadio.type = "radio";
    completeRadio.name = project.name;
    completeRadio.value = "Complete";
    completeRadio.addEventListener("click", function() {
      project.status = "Complete";
    });
    listItem.appendChild(notStartedRadio);
    listItem.appendChild(document.createTextNode("Not started"));
    listItem.appendChild(inProgressRadio);
    listItem.appendChild(document.createTextNode("In-progress"));
    listItem.appendChild(completeRadio);
    listItem.appendChild(document.createTextNode("Complete"));
    projectList.appendChild(listItem);
    projectContainer.appendChild(projectList);
  });
}
// Add recent activity
function addActivity(member, change) {
  var activityList = document.getElementById("activity-list");
  var listItem = document.createElement("li");
  var now = new Date();
  var timeString = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() ;
  var timeStrings =  now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
  listItem.textContent = member + " made the following change: " + change + " (" + timeString + ")"  + "    " +"(" + timeStrings + ")";
  activityList.insertBefore(listItem, activityList.firstChild);
}

// Handle project form submission
document.getElementById("project-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission 
  var projectName = document.getElementById("project-name").value;
  var projectMembers = document.getElementById("project-members").value;
  addProject(projectName, projectMembers);
  renderProjects();
  addActivity("Admin", " Created project: " + projectName);
  
});
 

// Adding and deleting members in a project
function addName() {
  var nameInput = document.getElementById('nameInput');
  var nameList = document.getElementById('nameList');
  
  if (nameInput.value.trim() !== '') {
    var name = nameInput.value;
    var listItem = document.createElement('li');
    listItem.textContent = name;
    listItem.addEventListener('click', function() {
      this.style.textDecoration = "line-through";
    });
    listItem.addEventListener('dblclick', function() {
      this.remove();
    });
    nameList.appendChild(listItem);
    nameInput.value = '';
  }
}
 
function toHr(){
  window.location.href="humanResource.html";
}
function toIt(){
  window.location.href="IT.html";
}
function toRPo(){
  window.location.href="RPO.html";
}
function toSCm(){
  window.location.href="SCM.html"; 
}
function toRecords(){
  window.location.href="Records.html";
}
function toCeo(){
  window.location.href="officeOfTheCEO.html";
}
function toRQm(){
  window.location.href="RQM.html";
}
function toCommunications(){
  window.location.href="communications.html";
}
function toFinance(){
  window.location.href="finance.html";
}
function toIP(){
  window.location.href="institution&Participation.html";
}
function toCMe(){
  window.location.href="CME.html";
}
function toDIm(){
  window.location.href="DIM.html";
}
function toWUa(){
  window.location.href="WUA.html";
}
function toIa(){
  window.location.href="InternalAuditing.html";
}

// arrangements of dates
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');

endDate.addEventListener('change', () => {
  if (startDate.value < endDate.value) {
    
  }else{
    alert('Start date cannot be equal to or later than the end date. Please choose a valid date range.');
    endDate.value = '';
  }
});

