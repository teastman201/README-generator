var inquirer = require("inquirer");
var writeToFile = require('fs');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "Description",
        message: "What is the description of your project?",
    },
    {
        type: "input",
        name: "Contents",
        message: "Please indicate the table of contents.",
    },      
    {
        type: "input",
        name: "Installation",
        message: "What are the installation instructions for your project?",
    },
    {
        type: "input",
        name: "Usage",
        message: "Please indicate how to use this project.",
    },
    {
        type: "list",
        name: "License",
        message: "Which licenses apply to this project?",
        choices: [
            "MIT License",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "The Unlicense"
        ]
    },
    {
        type: "input",
        name: "Contributing",
        message: "How does one contribute to this project?",
    },
    {
        type: "input",
        name: "Tests",
        message: "How does one test this project?",
    },
    {
        type: "input",
        name: "Profile",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email address?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    var asked = inquirer.prompt(questions);
    // console.log(asked);
}

// function call to initialize program
init();
