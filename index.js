// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// create classes to generate objects
class Prompts {
  constructor(type, name, message) {
    this.type = type;
    this.name = name;
    this.message = message;
  }
}

class List extends Prompts {
  constructor(type, name, message, choices) {
    super(type, name, message);
    this.choices = choices;
  }
}

class Conditional extends Prompts {
  constructor(type, name, message, when) {
    super(type, name, message);
    this.when = when;
  }
}
// A list of prompts to run through inquirer.prompt():
const questions = [ // create instances of Prompts and List4
  //* prompt Title of project;
  new Prompts('input', 'title', 'Enter a Title:', null),
  
  //* prompt for Description section;
  new Prompts('input', 'descr', 'Enter a Description:'),

  //* prompt for Installation section;
  new Prompts('input', 'inst', 'Enter any Installation instructions:'),

  //* prompt for Usage section;
  new Prompts('input','usage', 'Enter any Usage information:'),

  //* prompt for License section;
  new List('list', 'license', 'Chose a License:', 
    [ // array of licenses accepted as an argument
    'Apache License 2.0',
    'Boost Software License',
    'Creative Commons Zero v1.0 Universal',
    'GNU General Public License v3.0',
    'ISC License',
    'MIT License',
    'Mozilla Public License 2.0',
    'The Unlicense',
    ]
  ),

  //* prompt for Contributing section;
  new Prompts('input', 'contr', 'Enter any Contribution guidelines:'),

  //* prompt for Tests section;
  new Prompts('input', 'tests', 'Enter any Test information'),

  //* prompts for Questions section;
  
    // prompt for Email:
  new Prompts('confirm', 'confirm.email', "Include Email?"),
  new Conditional('input', 'questions.email', 'Enter Email address:', (answers) => answers.confirm.email),
    
    //prompt for GitHub username:
  new Prompts('confirm', 'confirm.github', 'Include GitHub account?'),
  new Conditional('input', 'questions.github', 'Enter Github Username:', (answers) => answers.confirm.github)
];

// Main functionality:
function init() {
  // prompt answers to generateMarkdown()
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers)) // for debugging purposes
    
    // write the README from Markdown
    fs.writeFile('./generated/README.md', generateMarkdown(answers), (err) => 
      err ? console.log(err) : console.log(`Success! Check the 'generated' directory`)
    );
  })
}

// Function call to initialize app
init();
