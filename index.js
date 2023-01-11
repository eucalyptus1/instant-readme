const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of your project'
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Describe the projects usage and functionality'
    },

    {
        type: 'input',
        name: 'license',
        message: 'Which license is this project under?'
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project'
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Detail the testing procedure for the project'
    },

    {
        type: 'input',
        name: 'questions',
        message: 'Provide a link to your Github account'
    }
];

// Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// inquirer.prompt([
//     {
//         type: 'input',
//         name: 'title',
//         message: 'What is the title of your project?'
//     },

//     {
//         type: 'input',
//         name: 'description',
//         message: 'Give a brief description of your project'
//     },

//     {
//         type: 'input',
//         name: 'usage',
//         message: 'Describe the projects usage and functionality'
//     },

//     {
//         type: 'input',
//         name: 'license',
//         message: 'Which license is this project under?'
//     },

//     {
//         type: 'input',
//         name: 'contributing',
//         message: 'Who contributed to this project'
//     },

//     {
//         type: 'input',
//         name: 'tests',
//         message: 'Detail the testing procedure for the project'
//     },

//     {
//         type: 'input',
//         name: 'questions',
//         message: 'Provide a link to your Github account'
//     },


// ])
// .then(function(data){
//     console.log(data);

// });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();
