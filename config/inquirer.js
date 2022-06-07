var inquirer = require('inquirer');
inquirer
    .prompt([
        /* View all departments,
            View all roles,
            View all employees,
            Add a department,
            Add a role,
            Add an employee,
            Update an employee role */
    ])

    //View all departments
    .then((answers) => {
        // Use user feedback for... whatever!!
    })

    //View all roles
    .then((answers) => {
        // Use user feedback for... whatever!!
    })

    //View all employees
    .then((answers) => {
        // Use user feedback for... whatever!!
    })

    //Add a department
    .then((answers) => {
        // Use user feedback for... whatever!!
    })

    //Add a role
    .then((answers) => {
        // Use user feedback for... whatever!!
    })

    ///Add an employee
    .then((answers) => {
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });