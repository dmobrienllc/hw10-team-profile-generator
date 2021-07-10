const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name,email,officeNumber) {
        super(id, name,email,"manager-icon-path");
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