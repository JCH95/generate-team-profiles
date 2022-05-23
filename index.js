const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const internPrompts = require('./src/internPrompts');
const engineerPrompts = require('./src/engineerPrompts');
const managerPrompts = require('./src/managerPrompts');
const cssGenerator = require('./src/style.css');
const htmlGenerator = require('./src/page-template');
const { rejects } = require('assert');
const { resolve } = require('path');

const employees = [];

// function writeToFile(fileName, data) {
//     fsPromises.
// }

// Generate employee info
async function newEmployee(role) {
    let newEmployee = {};
    let responses = {};

    if (role === "Engineer") {
        responses = await inquirer.prompt(engineerPrompts);
        newEmployee = new Engineer(
            responses.name, responses.id, responses.email, responses.github
        );
    } else if (role === "Intern") {
        responses = await inquirer.prompt(internPrompts);
        newEmployee = new Intern(
            responses.name, responses.id, responses.email, responses.school
        );
    } else if (role === "Manager") {
        responses = await inquirer.prompt(managerPrompts)
        newEmployee = new Manager(
            responses.name, respones.id, responses.email, responses.office
        );
    }
    employees.push(newEmployee);

}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            reject(err);
            console.log(err);
            return;
        }
        resolve({ ok: true, message: "Team generated!" });
    });
}

// Initialize app
newEmployee("Manager");