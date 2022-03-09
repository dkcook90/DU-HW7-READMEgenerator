// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = 'README.md'

// TODO: Create an array of questions for user input
const questions = [
                    'What is the title of the application?', 
                    'Write a breif description of your application..', 
                    'Explain how the user installs your application..', 
                    'Describe the primary usage of your application..', 
                    'Describe how other users can contribute to your application..', 
                    'How does a user test your applicatoin?',
                    'What is your GitHub username?',
                    'What is your email?'
                    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('README successfully generated')
    )};

// TODO: Create a function to initialize app
function init(inquirer) {
    inquirer.prompt ([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contributing',
        },
        {
            type: 'list',
            message: 'Please choose a license...',
            choices: 
                [
                    'MIT', 
                    'Apache', 
                    'Mozilla Public', 
                    'GNU Affero General Public', 
                    'GNU General Public', 
                    'GNU Lesser General Public'
                ],
            name: 'license',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'tests',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'GitHub',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'email',
        },
    ])
    .then((data) => {
        console.log(data)
        writeToFile(fileName, data)
    })
}

// Function call to initialize app
init(inquirer);