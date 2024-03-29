#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what you want to add in your list"
        },
        {
            name: "Addmore",
            type: "confirm",
            message: "Do you wat to add more? "
        }
    ]);
    condition = addtask;
    console.log(condition);
}
