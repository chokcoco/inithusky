#! /usr/bin/env node 

const program = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');

program
    .action(option => {
        console.log(option)
        console.log('Hello World')
        //为什么是Hello World 给你个眼神，自己去体会...
    })
    
program.parse(process.argv);