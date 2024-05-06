#! /usr/bin/env node

import inquirer from "inquirer"

// Target set before going to code

// 1) Computer will generate a random number  (done in line 10)
// 2) User input for guessing a number ( done in line 13 )
// 3) Compare user input with computer generated number and show results


const randomNumber = Math.floor(Math.random() * 6+1)
const answers =await inquirer.prompt([
{
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1-6:",

}

]);

if (answers.userGuessedNumber === randomNumber  ){
console.log("congratulations you guessed a correct number.")
}else {
console.log(" You guessed a wrong number")
}

