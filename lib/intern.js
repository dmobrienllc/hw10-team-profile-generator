const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name,email,school) {
        super(id, name,email,"<i class='fas fa-user-graduate'></i>");
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
      console.log(`EmployeeID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Role: ${this.getRole()}, School: ${this.school}`);
    }
  }
  module.exports = Intern;