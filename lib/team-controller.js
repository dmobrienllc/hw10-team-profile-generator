const Engineer = require("./engineer");
const Manager = require("./manager");
const Intern = require("./intern");

class TeamController {
    constructor(teamName) {
        this.teamName = '';
        this.teamMembers = [];
        this.managerAdded = false;
    }

    setTeamName (teamName){ 
      this.teamName = teamName;
    }

    getTeamMemberArray(){
      return this.teamMembers;
    }
    
    addManager(id, name,email,officeNumber){
      if(!this.managerAdded){
        let manager = new Manager(id, name,email,officeNumber);
        this.teamMembers.push(manager);
        this.managerAdded = true;
      }
    }

    addIntern(id, name,email,school){
        let intern = new Intern(id, name,email,school);
        this.teamMembers.push(intern);
    }

    addEngineer(id, name,email,gitHubAcct){
      let engineer = new Engineer(id, name,email,gitHubAcct);
      this.teamMembers.push(engineer);
  }

    getTeamName(){
        return this.teamName;
      }
  
    getTeamMemberCount(){
        return this.teamMembers.length;
      }
  
    getNextTeamMember(){
        return this.teamMembers.shift()[0];
    }

    getManager(){
        return this.teamMembers.filter(member => (member.getRole() === "Manager"))[0];
    }
  }

  module.exports = TeamController;


      // addManager(){
    //   if(!this.managerAdded){
    //     inquirer.prompt([
    //       {
    //           type: "input",
    //           message: "What is the manager's id?",
    //           name: "mgrid"
    //       },
    //       {
    //         type: "input",
    //         message: "Please add manager name.",
    //         name: "mgrname"
    //       },
    //       {
    //         type: "input",
    //         message: "What is the managers email?",
    //         name: "mgremail"
    //       },
    //       {
    //           type: "input",
    //           message: "What is the managers office number?",
    //           name: "mgrofficenbr"
    //       },
    //       {
    //           type: "input",
    //           message: "What is the team name?",
    //           name: "teamname"
    //       }
    //     ]).then( ({mgrid,mgrname, mgremail, mgrofficenbr, teamname}) => {
    //           this.setTeamName(teamname);
    //           this.addManager(mgrid,mgrname, mgremail, mgrofficenbr);
    //     });
    //   }
    // }
