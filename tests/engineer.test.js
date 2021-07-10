const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an Engineer object with 'id' number, 'name' string,'email' string, 'iconPath' string, 'gitHubAcct' string", () => {
            const engineer = new Engineer(1, "David OBrien", "dmobrienllc@gmail.com", "dmobrienllc");

            expect(engineer).toEqual({ id: 1, name: "David OBrien", email: "dmobrienllc@gmail.com", iconPath: "engineer-icon-path", gitHubAcct: "dmobrienllc" });
        });
    });

    describe("getRole", () => {
        it("should return the string 'Engineer'", () => {
            //arrange
            const engineer = new Engineer(1, "David OBrien", "dmobrienllc@gmail.com", "dmobrienllc");

            //act
            let role = engineer.getRole();

            //assert
            expect(role).toEqual("Engineer");
        });
    });

    describe("getGitHubLink", () => {
        it("should return the string 'https://github.com/dmobrienllc'", () => {
            //arrange
            const engineer = new Engineer(1, "David OBrien", "dmobrienllc@gmail.com", "dmobrienllc");

            //act
            let linkText = engineer.getGitHubAccountLink();

            //assert
            expect(linkText).toEqual("https://github.com/dmobrienllc");
        });
    });
});

