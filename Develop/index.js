// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer= require ("inquirer");
const fs =require("fs");
// TODO: Create an array of questions for user input
const questions = [
{
    type:"input",
    message: "What's your GitHub username?",
    name:"username"
},
{
    type:"input",
    message: "What's your repository name?",
    name:"repo"
},
{
    type:"input",
    message: "What's your project title?",
    name:"title"
},
{
    type:"input",
    message: "What's your repository name?",
    name:"description"
},
{
    type:"input",
    message: "Describe how to instal your app:",
    name:"installation"
},
{
    type:"input",
    message: "Explain how to use your app:",
    name:"usage"
},


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFileSync(fileName, generateMarkdown(data));
        console.log("The file has created successfully");
        // file written successfully
        //catch error's if they exists
      } catch (err) {
        console.error(err);
      }


}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {

    writeToFile("./newReadme/readme.md", answers)

    // Use user feedback for... whatever!!
  })
  .catch((error) => {
   console.error(error)
  });

}

// Function call to initialize app
init();
