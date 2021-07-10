const TeamController = require("../lib/team-controller");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");

describe("TeamController", () => {
    describe("Initialization", () => {
        it("should create an TeamController object with 'teamName' string, 'teamMembers' [],'managerAdded' bool ", () => {
            //Arrange
            const teamController = new TeamController("");

            //Assert
            expect(teamController).toEqual({ teamName: "", teamMembers: [], managerAdded: false});
        });
    });

    describe("setTeamName", () => {
        it("should set team name to input string'", () => {
            //Arrange
            const teamName = "TestTeam";
            const teamController = new TeamController("");

            //act
            teamController.setTeamName(teamName)

            //assert
            expect(teamController.getTeamName()).toEqual(teamName);
        });
    });

    describe("getManager", () => {
        it("should return Manager object from collection'", () => {
            //Arrange
            const teamName = "TestTeam";
            const teamController = new TeamController(teamName);
            teamController.addManager(99,"Jane Manager","jmgr@smith.com",100);
            teamController.addIntern(100,"John Intern","jintern@smith.com","MIT");

            //act
            let mgrObj = teamController.getManager();

            //assert
            expect(mgrObj).toBeInstanceOf(Manager);
        });
    });
});

