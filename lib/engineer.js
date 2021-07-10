const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name,email,gitHubAcct) {
        super(id, name,email,"<i class='fas fa-glasses'></i>");
        this.gitHubAcct = gitHubAcct;
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

    getGitHubAccountName(){
      return this.gitHubAcct;
    }

    getGitHubAccountUrl(){
      return "https://github.com/" + this.gitHubAcct;
    }

    getRole(){
      return "Engineer";
    }
  
    printInfo() {
      console.log(`EmployeeID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Title: ${this.title}`);
    }
  }
  module.exports = Engineer;