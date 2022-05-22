const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const internPrompts = require('./src/internPrompts');
const engineerPrompts = require('./src/engineerPrompts');
const managerPrompts = require('./src/managerPrompts');
const css = require('./src/style.css');
const htmlGenerator = require('./src/page-template');

const employeeArray = [];

// function writeToFile(fileName, data) {
//     fsPromises.
// }

// Generate employee info
async function newEmployee(role) {
    let newEmployee = {};
    let responses = {};

    if(role === "Engineer") {
        responses = await inquirer.prompt(engineerPrompts);
        newEmployee = new Engineer(
            responses.name, responses.id, responses.email, responses.github
        )
    }
}