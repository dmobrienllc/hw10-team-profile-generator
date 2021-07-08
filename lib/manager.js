const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name,email,iconPath,officeNumber) {
        super(id, name,email,iconPath);
        this.officeNumber = officeNumber;
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
  
      getOfficeNumber(){
        return this.officeNumber;
      }
  
      getRole(){
        return "Manager";
      }
  }
  module.exports = Manager;