// Global variable and dependencies
var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// Is this a call or callback?

// callbacks with async functions
// 
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
            name: "Repository",
            message: "What is the exact name of the GitHub repository for this project?",
        },
        {
            type: "input",
            name: "Email",
            message: "What is your email address?"
        }

    ])
    .then(async response => {       

        var fileName = "README.md";

        var readme = await generateMarkdown(response);

        writeToFile(fileName, readme);

       
    });
        
 // function to write README file
  function writeToFile(fileName, readme) {    
     

     fs.writeFile(`./your_files/${fileName}/`, readme, function(err) {

        if (err) {
          return console.log(err);
        }
                
        console.log("Success!");
    
      });

}

  
