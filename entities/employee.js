class Employee {
    constructor(id, name,title, email,iconPath) {
      this.id = id;
      this.name = name;
      this.title = title;
      this.email = email;
      this.iconPath = iconPath;
    }
  
    printInfo() {
      console.log(`EmployeeID: ${this.id}, Name: ${this.name}, Email: ${this.email}`);
    }
  }
  module.exports = Employee;