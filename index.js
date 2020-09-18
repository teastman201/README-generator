var inquirer = require("inquirer");
var fs = require('fs');


inquirer
    .prompt([
        {
            type: "input",
            name: "Title",
            message: "What is the title of your repo (project)?",
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

        // const responseArray = [title, description, contents, installation, usage, license, contributing, tests, profile, email];

        var filename = "README.md"
                
        var readme = `# ${title} ![GitHub](https://img.shields.io/github/license/${profile}/${title}?style=for-the-badge)
        \r\n## Description\r\n${description}        
        \r\n## Table of Contents\r\n*[Description](#description)\r\n*[Installation](#installation)\r\n*[Usage](#usage)\r\n*[License](#license)\r\n*[Contributing](#contributing)\r\n*[Tests](#tests)\r\n*[Questions](#questions)       
        \r\n## Installation\r\n${installation}
        \r\n## Usage\r\n${usage}
        \r\n## License\r\nThis project is licensed under the terms of the ${license}
        \r\n## Contributing\r\n${contributing}        
        \r\n## Tests\r\n${tests}
        \r\n## Questions\r\nContact me at:\r\n[${profile}](https://github.com/${profile})
        \r\nFor additional questions email me at:\r\n${email}`
     
        
        fs.writeFile(filename, readme, function(err) {

            if (err) {
              return console.log(err);
            }
        
            // console.log(response);
            // console.log(parse);
            console.log("Success!");
        
          });

    });
