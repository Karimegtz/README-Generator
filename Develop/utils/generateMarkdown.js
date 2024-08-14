// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {

return `![GitHub](https://img.shields.io/github/license/${data.username}/${data.repo}?style=for-the-badge)`


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {

  return `https://github.com/${data.username}/${data.repo}/blob/main/LICENSE` 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {

return  ` ${renderLicenseBadge(data)}<br>
this project is under a license (${renderLicenseLink(data)}).See the LICENCE file for more details.
`

}

// TODO: Create a function to generate markdown for README
//estructura del readme
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}


## Credits

Karime Gutierrez https://github.com/${data.username}

## License
${renderLicenseSection(data)}

`;

}

module.exports = generateMarkdown;
