// function to generate markdown for README
function generateMarkdown(response) {

  // Local variables
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
  repo = response.Repository;
 
  var readme = `# ${title} ![GitHub](https://img.shields.io/github/license/${profile}/${repo}?style=for-the-badge)
  \r\n## Description\r\n${description}        
  \r\n## Table of Contents\r\n* [Description](#description)\r\n* [Installation](#installation)\r\n* [Usage](#usage)\r\n* [License](#license)\r\n* [Contributing](#contributing)\r\n* [Tests](#tests)\r\n* [Questions](#questions)       
  \r\n## Installation\r\n${installation}
  \r\n## Usage\r\n${usage}
  \r\n## License\r\nThis project is licensed under the terms of the ${license}
  \r\n## Contributing\r\n${contributing}        
  \r\n## Tests\r\n${tests}
  \r\n## Questions\r\nContact me on GitHub:\r\n[${profile}](https://github.com/${profile})
  \r\nYou may also email me at:\r\n${email}`

  return readme;
}

module.exports = generateMarkdown;
