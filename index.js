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

let employees = [];

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
            responses.name, responses.id, responses.email, responses.office
        );
    }
    // inquirer
    //     .prompt([
    //         {
    //             type: 'list',
    //             name: 'role',
    //             message: 'Choose which role your employee fits:',
    //             choices: ['Intern', 'Engineer', 'Manager', 'There are no further members to add!']
    //         }
    //     ])
    //     .then(promptChoices => {
    //         switch(promptChoices.role) {
    //             case "Manager": 
    //                 managerPrompts();
    //                 break;
    //             case "Engineer": 
    //                 engineerPrompts();
    //                 break;
    //             case "Intern":
    //                 internPrompts();
    //                 break;
    //         }
    //     })
    employees.push(newEmployee);

    let otherEmployees = responses.otherEmployees;
    if (otherEmployees === "No, the team is complete!") {
        const html = htmlGenerator(employees);
        writeToFile(`./dist/index.html`, html);

        const css = cssGenerator(employees);
        writeToFile(`./dist/style.css`, css);
    } else {
        newEmployee(responses.otherEmployees);
    }
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
newEmployee('Manager');