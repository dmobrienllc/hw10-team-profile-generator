const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name,email,iconPath,school) {
        super(id, name,email,iconPath);
        this.school = school;
    }

    getId(){
      return super.getId();
    }

    getName(){
      return super.getName();
    }

    getEmail(){
      return super.getEmail();
    }

    getSchool(){
      return this.school;
    }

    getRole(){
      return "Intern";
    }
  
    printInfo() {
      console.log(`EmployeeID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Title: ${this.title}`);
    }
  }
  module.exports = Intern;