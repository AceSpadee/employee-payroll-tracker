// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// Collect employee data
const collectEmployees = function() {
    // storing employees data into an array
    const employees = [];
      // The let var has a value strictly equal to the users input
    let userinput = "";
    // This loop asks for input from user until users clicks cancel which breaks the loop
    while (userinput !== false) {
        const firstName = prompt("Enter first name");
        const lastName = prompt("Enter last name");
        let salary = prompt("Enter salary");
         // Checks if the entered salary is a valid number; if not then return a default of 0, if true then return salary value
        salary = isNaN(parseFloat(salary)) ? 0 : parseFloat(salary);

            // Prompt the user to confirm if they want to add another employee
        userinput = confirm("Do you want to add another employee?")

        // Create an object to store the employee's first name, last name, and salary
        const employeedata = {
            firstName: firstName,
            lastName: lastName,
            salary: salary,
        };
        // adding the values of employeedata to the employees array
        employees.push(employeedata);
    }
    // returns the array of employees
    return employees;
}
// Display the average salary
const displayAverageSalary = function(employeesArray) { 
    let totalsalary = 0
     // Calculate the total salary by iterating over the employeesArray and adding the totals together
    for (let i = 0; i < employeesArray.length; i++) {
      totalsalary += parseFloat(employeesArray[i].salary);
    }
     // This variable takes a value of the average salary, and then divides the total salary by the length of the array.
    const averagesalary = totalsalary / employeesArray.length;
     // Display the average employee salary with the total number of employees
    console.log(`the average employee salary ${employeesArray.length} employee(s) is $${averagesalary}`);
}
// Select a random employee
const getRandomEmployee = function(employeesArray) {
   // Selecting a random employee from the employeesArray by generating a random number 0 -1 then multiplying the employeesArray length
   const randomEmployee = employeesArray[(Math.floor(Math.random() * employeesArray.length))];
    // Logging a congratulatory message to the console with the first name and last name of the randomly selected employee
    console.log(`congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`)
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/
// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');
  // Clear the employee table
  employeeTable.innerHTML = '';
  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    const newTableRow = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);
    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);
    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });
    newTableRow.append(salaryCell);
    employeeTable.append(newTableRow);
  }
}
const trackEmployeeData = function() {
  const employees = collectEmployees();
  console.table(employees);
  displayAverageSalary(employees);
  console.log('==============================');
  getRandomEmployee(employees);
  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });
  displayEmployees(employees);
}
// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
