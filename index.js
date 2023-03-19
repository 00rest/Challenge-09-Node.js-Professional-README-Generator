console.log('This is working');

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const lic = require('./utils/data');

//console.log(lic);
//console.log(questions);


// TODO: Create an array of questions for user input
const licChoice = [];
const questions = [
    { type: 'input', name: 'title', message: 'Project title:' },
    // { type: 'input', name: 'description', message: 'Description:' },
    // { type: 'input', name: 'install', message: 'Installation instructions:' },
    // { type: 'input', name: 'usage', message: 'Usage information:' },
    { type: 'list', name: 'license', message: 'Select a license', choices: licChoice },
    // { type: 'input', name: 'contributung', message: 'Contribution guidelines' },
    // { type: 'input', name: 'test', message: 'Test instructions' },
];
lic.forEach((element) => { licChoice.push(element.name) });
//console.log(licChoice);


// TODO: Create a function to write README file
function writeToFile(data) {
    console.log('starting to write to file');
    fs.writeFile('testingFS.md', data, (err) => err ? console.error(err) : console.log('Success!'));
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => { writeToFile(generateMarkdown(lic, answers)) })
};

// Function call to initialize app
init();
