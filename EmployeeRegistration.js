// Crud table functionality

// Employee class
class Employee {
    constructor(name, surname, division, username) {
      this.name = name;
      this.surname = surname;
      this.division = division;
      this.username = username;
    }
  }
  
  // Store employees
  let employees = [];
  
  // Function to add employee
  function addEmployee(name, surname, division, username) {
    const employee = new Employee(name, surname, division, username);
    employees.push(employee);
  }
  
  // Function to render employees
  function renderEmployees() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';
  
    employees.forEach((employee, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${employee.name}</td>
        <td>${employee.surname}</td>
        <td>${employee.division}</td>
        <td>${employee.username}</td>
        <td>
          <button onclick="editEmployee(${index})">Edit</button>
          <button onclick="deleteEmployee(${index})">Delete</button>
        </td>
      `;
      employeeList.appendChild(row);
    });
  }
  
  // Function to delete employee
  function deleteEmployee(index) {
    employees.splice(index, 1);
    renderEmployees();
  }
  
  // Function to edit employee
  function editEmployee(index) {
    const employee = employees[index];
    const nameInput = document.getElementById('name-input');
    const surnameInput = document.getElementById('surname-input');
    const divisionSelect = document.getElementById('division-select');
    const usernameInput = document.getElementById('username-input');
  
    nameInput.value = employee.name;
    surnameInput.value = employee.surname;
    divisionSelect.value = employee.division;
    usernameInput.value = employee.username;
  
    employees.splice(index, 1);
    renderEmployees();
  }
  
  // Event listener for form submission
  document.getElementById('employee-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nameInput = document.getElementById('name-input');
    const surnameInput = document.getElementById('surname-input');
    const divisionSelect = document.getElementById('division-select');
    const usernameInput = document.getElementById('username-input');

    
    const name = nameInput.value;
    const surname = surnameInput.value;
    const division = divisionSelect.value;
    const username = usernameInput.value;
  
    if (name && surname && division && username) {
      addEmployee(name, surname, division, username);
      renderEmployees();
      nameInput.value = '';
      surnameInput.value = '';
      divisionSelect.value = '';
      usernameInput.value = '';
    }
  });

 
  function dashboard(){
    window.location.href=("dashboard.html");
    
  }

