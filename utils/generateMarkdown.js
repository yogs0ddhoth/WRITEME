// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'Boost Software License':
      return '[![License: Boost 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
      break;
    case 'GNU General Public License v3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'ISC License':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'Boost Software License':
      return 'https://www.boost.org/LICENSE_1_0.txt';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      return 'http://creativecommons.org/publicdomain/zero/1.0/';
      break;
    case 'GNU General Public License v3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'ISC License':
      return 'https://opensource.org/licenses/ISC)';
      break;
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
      break;
    case 'Mozilla Public License 2.0':
      return 'https://opensource.org/licenses/MPL-2.0';
      break;
    case 'The Unlicense':
      return 'http://unlicense.org/';
      break;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache License 2.0':
      return 'Apache License 2.0';
      break;
    case 'Boost Software License':
      return 'Boost Software License';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      return 'Creative Commons Zero v1.0 Universal';
      break;
    case 'GNU General Public License v3.0':
      return 'GNU General Public License v3.0';
      break;
    case 'ISC License':
      return 'ISC License';
      break;
    case 'MIT License':
      return 'MIT License';
      break;
    case 'Mozilla Public License 2.0':
      return 'Mozilla Public License 2.0';
      break;
    case 'The Unlicense':
      return 'The Unlicense';
      break;
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Expected answers = {
  //   'title': String,
  //   'descr': String,
  //   'inst': String,
  //   'usage' : String,
  //   'license' : String,
  //   'contr' : String,
  //   'tests' : String,
  //   'confirm' : {
  //     'email': Boolean,
  //     'github': Boolean,
  //   },
  //   'questions' : {
  //     'email': String,
  //     'github': String,
  //   },
  // } = data parameter in generateMarkdown()w
  renderLicenseBadge(data.license);
  renderLicenseLink();
  renderLicenseSection();
  
  return `
  # ${data.title}
  
  ## Description
  ${data.descr}

  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.inst}

  ## Usage
  ${data.usage}

  ## License

  ## Contributing
  ${data.contr}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.questions.email}, ${data.questions.github}
  `;
}

module.exports = generateMarkdown;
