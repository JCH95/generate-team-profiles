const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const internPrompts = require('./src/internPrompts');
const engineerPrompts = require('./src/engineerPrompts');
const managerPrompts = require('./src/managerPrompts');
const css = require('./src/css');
const htmlGenerator = require('./src/htmlGenerator');

const employeeArray = [];