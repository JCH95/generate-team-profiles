const { validate } = require("@babel/types");
const inquirer = require("inquirer");

function engineerPrompts() {
    console.log(`
    ==================
    Engineer Questions
    ==================
    `);
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your engineer? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's name.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the associated engineer's ID: (Required)",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's ID.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the associated engineer's email address: (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's email address.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the associated engineer's GitHub name: (Required)",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Please enter the engineer's Github.");
                        return false;
                    }
                }
            },
            {
                type: 'choice',
                name: 'otherEmployees',
                message: 'Are there any other employees to add to the team?',
                choices: ['Intern', 'Manager', 'No, the team is complete!']
            }
        ]);
}

module.exports = engineerPrompts;