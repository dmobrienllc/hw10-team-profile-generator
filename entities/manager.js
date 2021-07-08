const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name,title, email,iconPath,officeNumber) {
        super(id, name,title, email,iconPath);
        this.officeNumber = officeNumber;
    }
  
    printInfo() {
      console.log(`EmployeeID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Title: ${this.title}`);
    }
  }
  module.exports = Manager;