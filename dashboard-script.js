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

// Update project status
function updateProjectStatus(name, status) {
  var project = projects.find(function(project) {
    return project.name === name;
  });

  if (project) {
    project.status = status;
  }
}         


// Render project list
function renderProjects() {
  var projectContainer = document.getElementById("projects");
  projectContainer.innerHTML = ""; // Clear the existing project lists

  projects.forEach(function (project) {
    var projectList = document.createElement("ul");
    projectList.classList.add("project-list"); // Add a class to style each project list

    var listItem = document.createElement("li");
    listItem.textContent = project.name + " - " + project.status;

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
  addActivity("Admin", "Created project: " + projectName);
});

// Simulate project status update
setTimeout(function() {
  updateProjectStatus("Project 1", "In Progress");
  renderProjects();
  
}, 3000); 

// Adding and deleting members in a project



  function addCheckbox() {
    var membersDiv = document.querySelector('.members');
    var newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.name = 'option' + (membersDiv.children.length - 1);
    newCheckbox.value = 'Option ' + (membersDiv.children.length - 1);
    membersDiv.insertBefore(newCheckbox, membersDiv.lastChild.previousSibling);
    membersDiv.insertBefore(document.createElement('br'), membersDiv.lastChild.previousSibling);
  }

  function deleteCheckedCheckboxes() {
    var membersDiv = document.querySelector('.members');
    var checkboxes = membersDiv.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        checkbox.parentNode.remove();
        checkbox.nextSibling.remove();
      }
    });
  }

