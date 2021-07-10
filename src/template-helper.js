const Engineer = require("../lib/engineer");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");
const TeamController = require("../lib/team-controller");

class TemplateHelper {
  constructor(teamController) {
    this.teamController = teamController;
  }

  generateTeamProfileHtml() {
    let profileHtml = this.generateHeader();
    profileHtml += this.generateTeamCards();
    profileHtml += this.generateFooter();
    return profileHtml;
  }

  generateHeader() {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="main.css" />
      <title>${this.teamController.getTeamName()}</title>
    </head>
    
    <body>
      <header class="jumbotron">
        <h1 class="display-3">${this.teamController.getTeamName()}</h1>
      </header>
      <div class="container-fluid">
      
      `;
  }

  generateTeamCards() {
    let teamCardsHtml = '';

    for(let i=0;i<this.teamController.teamMembers.length;i++){
      let member = this.teamController.teamMembers[i];

      if(member instanceof Manager){
        teamCardsHtml += this.generateManagerCard(member);
      }else if(member instanceof Engineer){
        teamCardsHtml += this.generateEngineerCard(member);
      }else{
        teamCardsHtml += this.generateInternCard(member);
      }
    }
    return teamCardsHtml;
  }

  //for now just use seperate methods to do this, refactor later to avoid duplication
  //if it makes sense
  generateManagerCard(manager){
    return `<div class="card">
              <div class="card-header">
                <h3>${manager.getName()}</h3>
                <h4><i class="fas fa-mug-hot"></i> Manager</h4>
              </div>
              <div class="card-body">
                <p class="card-text">Id: ${manager.getId()}</p>
                <p class="card-text">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
              </div>
            </div>
          `
  }

  generateEngineerCard(engineer){
    return `<div class="card">
              <div class="card-header">
                <h3>${engineer.getName()}</h3>
                <h4><i class="fas fa-glasses"></i> ${engineer.getRole()} </h4>
              </div>
              <div class="card-body">
                <p class="card-text">Id: ${engineer.getId()}</p>
                <p class="card-text">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p class="card-text">GitHub Profile: <a href="${engineer.getGitHubAccountUrl()}">${engineer.getGitHubAccountName()}</a></p>
              </div>
            </div>
          `
  }

  generateInternCard(intern){
    return `<div class="card">
              <div class="card-header">
                <h3>${intern.getName()}</h3>
                <h4><i class="fas fa-user-graduate"></i> Intern</h4>
              </div>
              <div class="card-body">
                <p class="card-text">Id: ${intern.getId()}</p>
                <p class="card-text">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p class="card-text">School: ${intern.getSchool()}</a></p>
              </div>
            </div>
          `
  }

  generateFooter() {
    return `</div>
            <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        </body>
    </html>
    `
  }
}

module.exports = TemplateHelper;

//let teamController = require("./lib/TeamController");





