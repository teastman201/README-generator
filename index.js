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
    .then(response => {       

        var fileNameReadMe = "README.md";
        var fileNameLicense = "LICENSE.txt";
        // var  = response.License;

        if (response.License === 'MIT License') {

       var licenseName = fs.readFileSync('./utils/mit_license.txt'); 
       
       writeLicense(fileNameLicense, licenseName)
         
        }

        console.log(response.License);
        
        var readme = generateMarkdown(response);

        writeReadMe(fileNameReadMe, readme);

        // writeLicense(fileNameLicense, licenseName);

    });
        
 // function to write README file
  function writeReadMe(fileNameReadMe, readme) {   
     
     fs.writeFile(`./your_files/${fileNameReadMe}/`, readme, function(err) {

        if (err) {
          return console.log(err);
        }
                
        console.log("Success!");
    
      });

}

// function to write LICENSE file
function writeLicense(fileNameLicense, licenseName) {

    fs.writeFile(`./your_files/${fileNameLicense}`, licenseName, function(err){

        if (err) {
            return console.log(err);
          }
                  
          console.log("Success!");
      
        });
  

    }


  
