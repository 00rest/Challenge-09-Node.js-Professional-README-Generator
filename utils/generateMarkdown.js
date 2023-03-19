// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  } else {
    return `![License badge](https://img.shields.io/badge/License-${license.replaceAll(' ', '_')}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licData, license) {
  if (license === 'None') {
    return ''
  } else {
    return licData.find(x => x.name == license).link
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(info, data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)

## Installation
${data.install}

## Usage
${data.usage}

![screenshot](${data.screenshot})

## License
${data.license}

${renderLicenseLink(info, data.license)}

## How to Contribute
${data.contributung}

## Tests
${data.test}

## Questions
If you have any questions, you can reach me at:

Email: ${data.email}

or

GitHub: https://github.com/${data.github}

`}


module.exports = generateMarkdown;
