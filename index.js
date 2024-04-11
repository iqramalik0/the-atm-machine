#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//print welcome message
console.log(chalk.blue("\n \twelcome to iqra -ATM Machine"));
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "kindly Enter your Id:"
    },
    {
        type: "number",
        name: "userPin",
        message: "kindly Enter your pin:"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current", "saving"],
        message: "select your account type:"
    },
    {
        type: "list",
        name: "transaction type",
        choices: ["fast cash", "withdraw"],
        message: "select your transaction",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 3000, 10000, 20000, 30000],
        message: "select your amount",
        when(answers) {
            return answers.transactionType == "fast cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "withdraw";
        },
    }
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance < EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("your remaining balance is ", remaining);
    }
    else {
        console.log(chalk.red("Insufficient Balance"));
    }
}
