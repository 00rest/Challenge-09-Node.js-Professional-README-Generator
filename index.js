console.log('This is working');

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const licChoice = ['None', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
const questions = [
    { type: 'input', name: 'title', message: 'Project title:' },
    // { type: 'input', name: 'description', message: 'Description:' },
    // { type: 'input', name: 'install', message: 'Installation instructions:' },
    // { type: 'input', name: 'usage', message: 'Usage information:' },
    // { type: 'list', name: 'lic', message: 'Select a license', choices: licChoice },
    // { type: 'input', name: 'contributung', message: 'Contribution guidelines' },
    // { type: 'input', name: 'test', message: 'Test instructions' },
];


// TODO: Create a function to write README file
function writeToFile(data) {
    console.log('starting to write to file');
    fs.writeFile('testingFS.txt', data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            var answer = JSON.stringify(answers.title);
            writeToFile(answer);
        });
};

// Function call to initialize app
init();