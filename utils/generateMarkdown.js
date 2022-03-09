// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return'![MIT license badge](https://img.shields.io/badge/license-MIT-green)';
      break;
    case 'Apache':
      badge = 'https://img.shields.io/badge/license-Apache-green';
      return badge;
      break;
    case 'Mozilla Public':
      badge = 'https://img.shields.io/badge/license-Mozilla%20Public-green';
      return badge;
      break;
    case 'GNU General Public':
      badge = 'https://img.shields.io/badge/license-GNU%20General%20Public-green';
      return badge;
      break;
    case 'GNU Lesser General Public':
      badge = 'https://img.shields.io/badge/license-GNU%20Lesser%20General%20Public-green';
      return badge;
      break;
    case 'GNU Affero General Public':
      badge = 'https://img.shields.io/badge/license-GNU%20Affero%20General%20Public-green';
      return badge;
      break;
    default:
      return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://choosealicense.com/licenses/mit/';
      break;
    case 'Apache':
      link = 'https://choosealicense.com/licenses/apache-2.0/';
      return link
      break;
    case 'Mozilla Public':
      link = 'https://choosealicense.com/licenses/mpl-2.0/';
      return link
      break;
    case 'GNU General Public':
      link = 'https://choosealicense.com/licenses/gpl-3.0/';
      return link
      break;
    case 'GNU Lesser General Public':
      link = 'https://choosealicense.com/licenses/lgpl-3.0/';
      return link
      break;
    case 'GNU Affero General Public':
      link = 'https://choosealicense.com/licenses/agpl-3.0/';
      return link
      break;
    default:
      return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license)
  const link =  renderLicenseLink(license)

  return `\n${badge} \n \n${link}`


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Descriptiton

  ${data.description}

  ## Table of Contents
  \n[Installation](#installation-instructions)
  \n[Usage](#usage-information)
  \n[License](#license)
  \n[Contributing](#contributing-guidlines)
  \n[Testing](#testing-instructions)
  \n[Questions](#questions)

  ## Installation Instructions

  ${data.installation}

  ## Usage Information

  ${data.usage}
  
  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing Guidlines

  ${data.contributing}

  ## Testing Instructions

  ${data.tests}

  ## Questions

  If you have any questions about ${data.title}, you may reach me at the following:

  GitHub: ${data.GitHub}
  email: ${data.email}
  
`;
}

module.exports = generateMarkdown;
