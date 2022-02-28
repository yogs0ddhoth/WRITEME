// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  // A list of prompts to run through inquirer.prompt():

  //* prompt title of project;

  //* prompt for Description section;

  //* prompt for Installation section;

  //* prompt for Usage section;

  //* prompt for License section;

  //* prompt for Contributing section;

  //* prompt for Tests section;

  //* prompt for Questions section;
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
    console.log(answers) // for debugging purposes
    const fileName = './generated/README.md'; // see NOTE TO SELF on line 28
    writeToFile(fileName, answers);
  })
}

// Function call to initialize app
init();
