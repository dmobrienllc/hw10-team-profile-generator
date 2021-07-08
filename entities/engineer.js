const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name,title, email,iconPath,githubAcctName) {
        super(id, name,title, email,iconPath);
        this.githubAcctName = githubAcctName;
    }
  
    printInfo() {
      console.log(`EmployeeID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Title: ${this.title}`);
    }
  }
  module.exports = Engineer;