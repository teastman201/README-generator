// Global variables and dependencies
var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// function to initialize program
function init() {

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
            // input questions to dynamically add year and full name to license
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
            writeLicense(fileNameLicense, licenseName, license);            
            writeReadMe(fileNameReadMe, readme);
            replaceText(licenseName, year, fullName);

        });

}

// function to write README file
function writeReadMe(fileNameReadMe, readme) {

    fs.writeFile(`./your_files/${fileNameReadMe}/`, readme, function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });

}

// function to write LICENSE file
async function writeLicense(fileNameLicense, licenseName, license) {

    if (license === 'MIT License' ||
        license === 'Apache License 2.0' ||
        license === 'GNU General Public License v3.0' ||
        license === 'Creative Commons Zero v1.0 Universal' ||
        license === 'Eclipse Public License 2.0' ||
        license === 'The Unlicense')

        await fs.writeFile(`./your_files/${fileNameLicense}`, licenseName, function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("Success!");
            
        });

}

// function to write year and full name to license file
function replaceText(licenseName, year, fullName) {
    licenseName.toString().replace("<year>", `${year}`);
    licenseName.toString().replace("<name>", `${fullName}`);
}

// function call to initialize program
init();
