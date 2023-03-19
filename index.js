// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const lic = require('./utils/data');

// TODO: Create an array of questions for user input
const licChoice = [];
const questions = [
    { type: 'input', name: 'title', message: 'Project title:' },
    { type: 'input', name: 'description', message: 'Description:' },
    { type: 'input', name: 'install', message: 'Installation instructions:' },
    { type: 'input', name: 'usage', message: 'Usage information:' },
    { type: 'input', name: 'screenshot', message: 'Screenshot directory:' },
    { type: 'list', name: 'license', message: 'Select a license:', choices: licChoice },
    { type: 'input', name: 'contributung', message: 'Contribution guidelines:' },
    { type: 'input', name: 'test', message: 'Test instructions:' },
    { type: 'input', name: 'github', message: 'Your GitHub name:' },
    { type: 'input', name: 'email', message: 'Your eMail:' },

];

lic.forEach((element) => { licChoice.push(element.name) });

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => err ? console.error(err) : console.log('Success!'));
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => { writeToFile(generateMarkdown(lic, answers)) })
};

// Function call to initialize app
init();
