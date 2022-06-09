require('dotenv').config();
var inquirer = require('inquirer');

//import and require mysql2
const mysql2 = require('mysql2');

//Connect to database
const db = mysql2.createConnection(
    {
        host: 'localhost',
        //MYSQL username,
        user: process.env.DB_USER,
        //MYSQL password
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    },
    console.log('Connected to the business_db database.')
);

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        businessQuestions()
    }
})

function businessQuestions() {
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
                    'Add an employee'
                ],
            },

        ])


        //View all departments
        .then((answers) => {
            console.log(answers)
            if (answers.business === "View all departments") {
                console.log('You selected view all departments')
                viewDepartments()
            } else if (answers.business === 'View all roles') {
                console.log('You selected view all roles')
                viewRoles()
            } else if (answers.business === 'View all employees') {
                console.log('You selected view all employees');
                viewEmployees()
            } else if (answers.business === 'Add a department') {
                console.log('You selected add a department');
                addDepartment()
            } else if (answers.business === 'Add a role') {
                console.log('You selected add a role');
                addRole()
            } else if (answers.business === 'Add an employee') {
                console.log('You selected add an employee')
                addEmployee()
            }
            // Use user feedback for... whatever!!
        })

        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });

}

function viewDepartments() {
    db.query("SELECT * FROM department;", function (err, results) {
        if (err) {
            console.log(err)
        }
        console.table(results)
    })
}

function viewRoles() {
    db.query("SELECT * FROM job_role;", function (err, results) {
        if (err) {
            console.log(err)
        }
        console.table(results)
    })
}

function viewEmployees() {
    db.query("SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, job_role.salary, job_role.department_id, job_role.title FROM employee JOIN job_role ON (job_role.id) = employee.role_id;", function (err, results) {
        if (err) {
            console.log(err)
        }
        console.table(results)
    })
}

function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}