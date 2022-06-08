var inquirer = require('inquirer');

var viewAllDept;
var viewAllRoles;
var viewAllEmployees;
var addADept;
var addARole;
var addAnEmployee;


inquirer
    .prompt([
        {
            type: 'list',
            name: 'business',
            message: 'What do you want to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'View all roles',
                'Add an employee'
            ],
        },

    ])


    //View all departments
    .then((viewAllDept) => {
        console.log('You selected view all departments');
        // Use user feedback for... whatever!!
    })

    //View all roles
    .then((answers) => {
        console.log('You selected view all roles');
        // Use user feedback for... whatever!!
    })

    //View all employees
    .then((answers) => {
        console.log('You selected view all employees');
        // Use user feedback for... whatever!!
    })

    //Add a department
    .then((answers) => {
        console.log('You selected add a departments');
        // Use user feedback for... whatever!!
    })

    //Add a role
    .then((answers) => {
        console.log('You selected add a role');
        // Use user feedback for... whatever!!
    })

    ///Add an employee
    .then((answers) => {
        console.log('You selected add an employee');
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });