#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [chalk.bgYellow("oil"), chalk.green("soap"), chalk.bgBlackBright("detergent"), "mayonase", chalk.red("ketchup"), chalk.bgCyanBright("cake")];
async function createTodo(todos) { }
do {
    let ans = await inquirer.prompt({
        type: "list",
        message: (chalk.bgBlue("select an operation")),
        name: "select",
        choices: [chalk.blue("Add"), chalk.yellow("update"), chalk.green("view"), chalk.red("delete"), "Exit"],
    });
    // console.log(ans);
    if (ans.select == "Add") {
        let addtodo = await inquirer.prompt({
            type: "input",
            message: (chalk.magenta("Add items in the list")),
            name: "todo",
        });
        todos.push(addtodo.todo);
    }
    if (ans.select == "update") {
        let updateTodo = await inquirer.prompt({
            type: "list",
            message: (chalk.green("update items in the list")),
            name: "todo",
            choices: todos.map(item => item),
        });
        let addtodo = await inquirer.prompt({
            type: "input",
            message: (chalk.magenta("Add items in the list")),
            name: "todo",
        });
        let newTodo = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodo, addtodo.todo];
        console.log(todos);
    }
    if (ans.select == "view") {
        console.log("*** TO DO LIST ***");
        console.log(todos);
        console.log("******************");
    }
    if (ans.select == "delete") {
        let deleteTodo = await inquirer.prompt({
            type: "list",
            message: "update items in the list",
            name: "todo",
            choices: todos.map(item => item),
        });
        let newTodo = todos.filter(val => val !== deleteTodo.todo);
        todos = [...newTodo];
        console.log(todos);
    }
} while (true);
let ans = await inquirer.prompt({
    type: "list",
    message: "select an operation",
    name: "select",
    choices: ["Add", "update", "view", "delete"],
});
// console.log(ans);
if (ans.select == "Add") { //ye condition ha
    let addtodo = await inquirer.prompt({
        type: "input",
        message: "Add items in the list",
        name: "todo",
    });
    todos.push(addtodo.todo);
    todos.forEach(todo => console.log(todo));
}
if (ans.select == "update") {
    let updateTodo = await inquirer.prompt({
        type: "list",
        message: "update items in the list",
        name: "todo",
        choices: todos.map(item => item),
    });
    let addtodo = await inquirer.prompt({
        type: "input",
        message: "Add items in the list",
        name: "todo",
    });
    let newTodo = todos.filter(val => val !== updateTodo.todo);
    todos = [...newTodo, addtodo.todo];
    console.log(todos);
}
if (ans.select == "view") {
    console.log("*** TO DO LIST ***");
    console.log(todos);
    console.log("******************");
}
if (ans.select == "delete") {
    let deleteTodo = await inquirer.prompt({
        type: "list",
        message: "update items in the list",
        name: "todo",
        choices: todos.map(item => item),
    });
    let newTodo = todos.filter(val => val !== deleteTodo.todo);
    todos = [...newTodo];
    console.log(todos);
}
createTodo(todos);
