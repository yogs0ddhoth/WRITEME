// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  // A list of prompts to run through inquirer.prompt():

  //* prompt title of project;
  {
    type: 'input',
    name: 'title',
    message: 'Enter a Title'
  },

  //* prompt for Description section;
  {
    type: 'input',
    name: 'descr',
    message: 'Enter a Description:'
  },

  //* prompt for Installation section;
  {
    type: 'input',
    name: 'inst',
    message: 'Enter any Installation instructions:'
  },

  //* prompt for Usage section;
  {
    type: 'input',
    name: 'usage',
    message: 'Enter any Usage information:'
  },

  //* prompt for License section;
  {
    type: 'list',
    name: 'license',
    choices: [
      'Apache License 2.0',
      'Boost Software License',
      'Creative Commons Zero v1.0 Universal',
      'GNU General Public License v3.0',
      'ISC License',
      'MIT License',
      'Mozilla Public License 2.0',
      'The Unlicense',
    ],
  },

  //* prompt for Contributing section;
  {
    type: 'input',
    name: 'contr',
    message: 'Enter any Contribution guidelines:'
  },

  //* prompt for Tests section;
  {
    type: 'input',
    name: 'tests',
    message: 'Enter any Test instructions:'
  },
  //* prompt for Questions section;
  // take email and/or github username
  {
    type: 'confirm',
    name: 'confirm.email',
    message: 'Include Email address?',
  },
  {
    type: 'confirm',
    name: 'confirm.github',
    message: 'Include GitHub account?',
  },
  {
    type: 'input',
    name: 'questions.email',
    message: 'Enter Email address:',
    when: (answers) => answers.confirm.email,
  },
  {
    type: 'input',
    name: 'questions.github',
    message: 'Enter GitHub Username:',
    when: (answers) => answers.confirm.github,
  },
];

// TODO: Create a function to write README file
// NOTE TO SELF: is the fileName parameter necessary, when the generated README always has the
// same file name?
const writeToFile = (fileName, data) => {
  // create file from data:
  
  // will this work?
  fs.writeFile(fileName, generateMarkdown(data), (err) => 
  err ? console.log(err) : console.log(`Success! Check the 'generated' directory`)
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers)) // for debugging purposes
    const fileName = './generated/README.md'; // see NOTE TO SELF on line 28
    writeToFile(fileName, answers);
  })
}

// Function call to initialize app
init();
