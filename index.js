var inquirer = require("inquirer");
var fs = require('fs');


inquirer
    .prompt([
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
            message: "Please indicate usage information for this project.",
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
            message: "What are the contribution guidelines for this project?",
        },
        {
            type: "input",
            name: "Tests",
            message: "What are the test instructions this project?",
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

    ])
    .then(response => {       

        title = response.Title;
        description = response.Description;
        contents = response.Contents;
        installation = response.Installation;
        usage = response.Usage;
        license = response.License;
        contributing = response.Contributing;
        tests = response.Tests;
        profile = response.Profile;
        email = response.Email;

        

    });
