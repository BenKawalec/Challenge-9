// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title of project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description?',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Installation instructions?',
        validate: install => {
            if (install) {
                return true;
            } else {
                console.log('Please enter installation instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage instructions?',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('Please enter usage instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution Guidlines?',
        validate: contribution => {
            if (contribution) {
                return true;
            } else {
                console.log('Please enter Contribution Guidlines');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions?',
        validate: test => {
            if (test) {
                return true;
            } else {
                console.log('Please enter test instructions');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license?',
        choices: ['Appache 2.0', 'CC0', 'Eclipse Public 1.0', 'GNU GPL v3']
    },
    
    {
        type: 'input',
        name: 'githubUser',
        message: 'GitHub Username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Enter your GitHub username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email address?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your email address');
                return false;
            }
        }
    },
];


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generated-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})