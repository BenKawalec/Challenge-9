// TODO: Create a function that returns a license badge based on which license is passed in
function LicenseBadge(license) { 
  if (license !== 'no license') {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return ' ';
  }
}
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'no license') {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Appache 2.0'){ 
    return `https://opensource.org/licenses/Apache-2.0`
  } else if (license  == 'CC0'){
    return 'http://creativecommons.org/publicdomain/zero/1.0/'
  } else if (license == 'Eclipse Public 1.0') {
    return 'https://opensource.org/licenses/EPL-1.0'
  } else if (license == 'GNU GPL v3') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${LicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)

  ${data.description}

  ## [Installation](#table-of-contents)

  ${data.install}

  ## [Usage](#table-of-contents)

  ${data.usage}
  
  For more information on how to add screenshots for examples, visit the following website:
  
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  
  ${data.license}

  ## [Contributing](#table-of-contents)
  
  ${data.contribution}

  ## [Tests](#table-of-contents)

  ${data.test}

  ## [Questions](#table-of-contents)

  Please contact me using the following links:

  [GitHub](https://github.com/${data.githubUser})

  [Email: ${data.email}](mailto:${data.email})
`;
}


module.exports = generateMarkdown;
