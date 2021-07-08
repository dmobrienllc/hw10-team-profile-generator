const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name,title, email,iconPath,school, degree) {
        super(id, name,title, email,iconPath);
        this.school = school;
        this.degree = degree;
    }
  
    printInfo() {
      console.log(`EmployeeID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Title: ${this.title}`);
    }
  }
  module.exports = Intern;