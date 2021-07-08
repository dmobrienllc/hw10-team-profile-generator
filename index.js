const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./entities/Employee');

const htmlFile = "<html><body><h1>Hello World</h1></body></html>"

let fsTest = () => {
    fs.writeFile(`team-profile.html`, htmlFile, (err) =>
                err ? console.error(err) : console.log('Success!'))
}

fsTest();