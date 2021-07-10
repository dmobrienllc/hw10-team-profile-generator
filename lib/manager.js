const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name,email,officeNumber) {
        super(id, name,email,"<i class='fas fa-mug-hot'></i>");
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