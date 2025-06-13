#! /usr/bin/env node
// SHABANG
//--------------------------------------------------------------------------------------------------------------------------------
// Command for downloading Typescript (npm install --global typescript)
// Command line for check version of Tupescript (tsc -v)
//--------------------------------------------------------------------------------------------------------------------------------
// Project Initiliaizing command (npm init)
// It will create package.Json file
// Command line for Typescript initiliazing (tcs --init)
// It will create tsconfig.Json
//--------------------------------------------------------------------------------------------------------------------------------
// Commmand line for inquirer (npm i inquirer)
// It will create node_modules files
// Code for import inquirer
// import inquirer from "inquirer"
// Command line for inquirer dependencies
// npm i --save-dev @types/inquirer
//---------------------------------------------------------------------------------------------------------------------------------
// Command line for npm publish and login 
// Its also used for manage and install package
// npm login
// npm publish
//----------------------------------------------------------------------------------------------------------------------------------
// Command line for run CLI programe
// npx is used for just run the CLI programes
// npx simple-calculator-muhammadwaqas 
//----------------------------------------------------------------------------------------------------------------------------------
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter First number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter Second Number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select one of the operator",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division", "exponents"],
    },
]);
// Conditional Statements
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "exponents") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else {
    console.log("Please enter a valid number");
}
console.log("The End");
