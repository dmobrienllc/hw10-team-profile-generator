class Employee {
    constructor(id, name, email,iconPath) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.iconPath = iconPath;
    }

    getId(){
      return this.id;
    }

    getName(){
      return this.name;
    }

    getEmail(){
      return this.email;
    }

    getRole(){
      return "Employee";
    }
  
    printInfo() {
      console.log(`EmployeeID: ${this.id}, Name: ${this.name}, Email: ${this.email}`);
    }
  }
  module.exports = Employee;