const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("The project must have a title");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "description",
    message: "Give a brief description of your project",
  },

  {
    type: "checkbox",
    name: "languages",
    message: "What was used to build this project? (Check all that apply)",
    choices: [
      "JavaScript",
      "HTML",
      "CSS",
      "ES6",
      "jQuery",
      "Ajax",
      "Bootstrap",
      "Node.js",
      "Express",
      "Mysql2",
    ],
  },

  {
    type: "input",
    name: "usage",
    message: "Describe the projects usage and functionality",
  },

  //   {
  //     type: "input",
  //     name: "license",
  //     message: "Which license is this project under?",
  //   },

  {
    type: "input",
    name: "contributing",
    message: "Who contributed to this project",
  },

  {
    type: "input",
    name: "tests",
    message: "Detail the testing procedure for the project",
  },

  {
    type: "input",
    name: "questions",
    message: "What is your Github username?",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("./dist/generatedReadme.md", generateMarkdown(data), (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("it works!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(answers);
  });
}

// Function call to initialize app
init();
