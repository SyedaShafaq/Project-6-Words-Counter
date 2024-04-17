#! /usr/bin/env node
//Import Inquirer module
import inquirer from "inquirer";
//Print app name
console.log(`\n \t ****Word Counter**** \t \n`);
//Store answer from a user
let user_ans = await inquirer.prompt({
    name: `sentence`,
    message: `Please Enter Your Sentence Here =>`,
    type: `input`
});
//Using trim & split method for removing whitespaces & make an array of segerated words 
let words = user_ans.sentence.trim().split(' ');
console.log(words);
//Counting length of our sentences,Using .length method
let count = words.length;
console.log(count);
//Print thanks for users
console.log(`\n \t ****Thanks For Using This App**** \t \n`);
