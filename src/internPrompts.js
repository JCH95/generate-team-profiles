const { validate } = require("@babel/types");
const inquirer = require("inquirer");

let internPrompts = [
    // console.log(`
    // ================
    // Intern Questions
    // ================
    // `);
    // inquirer
    //     .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your intern? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's name.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the associated intern's ID: (Required)",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's ID.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the associated intern's email address: (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's email address.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school: (Required)",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school.");
                        return false;
                    }
                }
            },
            // Continue if more employees need to be entered
            {
                type: 'list',
                name: 'otherEmployees',
                message: 'Are there any other employees to add to the team?',
                choices: ['Manager', 'Engineer', 'Intern', 'No, the team is complete!']
            }
        // ]);
];

module.exports = internPrompts;