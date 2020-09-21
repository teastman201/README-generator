// Global variables and dependencies
var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// function to initialize program
init = () => {
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
            },            
            {
                type: "input",
                name: "Year",
                message: "What year is it?"
            },
            {
                type: "input",
                name: "FullName",
                message: "What is your full name?"
            }
        ])
        .then(response => {
            var fileNameReadMe = "README.md";
            var fileNameLicense = "LICENSE.txt";
            var license = response.License
            var licenseName = fs.readFileSync(`./utils/${license}.txt`);
            var year = response.Year;
            var fullName = response.FullName;
            var readme = generateMarkdown(response);
            var program = response.Title;
            var description = response.Description;
            writeReadMe(fileNameReadMe, readme);
            writeLicense(fileNameLicense, licenseName, year, fullName, program, description);
        });
}

// function to write README file
writeReadMe = (fileNameReadMe, readme) => {
    fs.writeFile(`./your_files/${fileNameReadMe}/`, readme, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}

// function to write LICENSE file
writeLicense = (fileNameLicense, licenseName, year, fullName, program, description) => {

// function to write yaer and user full name to fill copyright sections
    var licenseObj = {
        "<year>": `${year}`,
        "<name>": `${fullName}`,
        "<program>": `${program}`,
        "<description>": `${description}`
    };

    licenseName = licenseName.toString().replace(/<year>|<name>|<program>|<description>/gi, function (matched) {
        return licenseObj[matched];
    });

    fs.writeFile(`./your_files/${fileNameLicense}`, licenseName, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}

// function call to initialize program
init();
