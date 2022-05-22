const { validate } = require("@babel/types");
const inquirer = require("inquirer");

function managerPrompts() {
    console.log(`
    =================
    Manager Questions
    =================
    `);
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your manager? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's name.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the associated manager's ID: (Required)",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's ID.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the associated manager's email address: (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's email address.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'office',
                message: "Please enter the associated manager's office number: (Required)",
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's office number.");
                        return false;
                    }
                }
            },
            {
                type: 'choice',
                name: 'otherEmployees',
                message: 'Are there any other employees to add to the team?',
                choices: ['Intern', 'Engineer', 'No, the team is complete!']
            }
        ]);
}

module.exports = managerPrompts;