const inquirer = require('inquirer');
const fs = require('fs');
const TeamController = require('./lib/team-controller');

let teamController = new TeamController("");

let isTesting = true;

const addManager = () => {
  inquirer.prompt([
    {
        type: "input",
        message: "What is the manager's id?",
        name: "mgrid"
    },
    {
      type: "input",
      message: "Please add manager name.",
      name: "mgrname"
    },
    {
      type: "input",
      message: "What is the managers email?",
      name: "mgremail"
    },
    {
        type: "input",
        message: "What is the managers office number?",
        name: "mgrofficenbr"
    },
    {
        type: "input",
        message: "What is the team name?",
        name: "teamname"
    }
  ]).then( ({mgrid,mgrname, mgremail, mgrofficenbr, teamname}) => {
        teamController.setTeamName(teamname);
        teamController.addManager(mgrid,mgrname, mgremail, mgrofficenbr);
        console.log(JSON.stringify(teamController));
        start();
  });
}

const addTeamMember = () => {
    inquirer.prompt([
      {
        type: "list",
        message: "Please select type of team member to add, or select 'None' to render profile. ",
        choices: [ "Intern", "Engineer", "None" ],
        name: "employeeTypeToAdd"
      }
    ]).then( ({employeeTypeToAdd}) => {
      switch(employeeTypeToAdd){
        case "Intern":
          addIntern();
          break;
  
        case "Engineer":
          addEngineer();
          break;
  
        case "None":
          renderProfile();
          break;
  
        default:
        
          break;
      }
    })
  }

  const renderProfile = () => {
      console.log(teamController);
  }

  const addIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's id?",
            name: "id"
        },
        {
          type: "input",
          message: "What is the intern's name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is the intern's email?",
          name: "email"
        },
        {
            type: "input",
            message: "What school did the intern attend?",
            name: "school"
        }
      ]).then( ({id,name, email, school}) => {
            teamController.addIntern(id,name,email, school);
            console.log(JSON.stringify(teamController));
            start();
      });
  }

  const addEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's id?",
            name: "id"
        },
        {
          type: "input",
          message: "What is the engineer's name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is the engineer's email?",
          name: "email"
        },
        {
            type: "input",
            message: "What is the engineer's github account name?",
            name: "githubacct"
        }
      ]).then( ({id,name, email, githubacct}) => {
            teamController.addEngineer(id,name,email, githubacct);
            console.log(JSON.stringify(teamController));
            start();
      });
  }

const start = () => {
    if(!teamController.managerAdded){
        addManager();
    }else{
        addTeamMember();
    }
}

start();