const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an Engineer object with 'id' number, 'name' string,'email' string, 'iconPath' string, 'gitHubAcct' string", () => {
            const engineer = new Engineer(1, "David OBrien", "dmobrienllc@gmail.com", "dmobrienllc");

            expect(engineer).toEqual({ id: 1, name: "David OBrien", email: "dmobrienllc@gmail.com", iconPath: "<i class='fas fa-glasses'></i>", gitHubAcct: "dmobrienllc" });
        });
    });

    describe("getName", () => {
        it("should return the string 'David OBrien'", () => {
            //arrange
            const engineer = new Engineer(1, "David OBrien", "dmobrienllc@gmail.com", "dmobrienllc");

            //act
            let name = engineer.getName();

            //assert
            expect(name).toEqual("David OBrien");
        });
    });

    describe("getEmail", () => {
        it("should return the string 'dmobrienllc@gmail.com'", () => {
            //arrange
            const engineer = new Engineer(1, "David OBrien", "dmobrienllc@gmail.com", "dmobrienllc");

            //act
            let email = engineer.getEmail();

            //assert
            expect(email).toEqual("dmobrienllc@gmail.com");
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

    describe("getEmail", () => {
        it("should return the string 'dmobrienllc@gmail.com'", () => {
            //arrange
            const engineer = new Engineer(1, "David OBrien", "dmobrienllc@gmail.com", "dmobrienllc");

            //act
            let email = engineer.getEmail();

            //assert
            expect(email).toEqual("dmobrienllc@gmail.com");
        });
    });

    describe("getGitHubAccountName", () => {
        it("should return the string 'dmobrienllc'", () => {
            //arrange
            const engineer = new Engineer(1, "David OBrien", "dmobrienllc@gmail.com", "dmobrienllc");

            //act
            let acctName = engineer.getGitHubAccountName();

            //assert
            expect(acctName).toEqual("dmobrienllc");
        });
    });

    describe("getGitHubAccountUrl", () => {
        it("should return the string 'https://github.com/dmobrienllc'", () => {
            //arrange
            const engineer = new Engineer(1, "David OBrien", "dmobrienllc@gmail.com", "dmobrienllc");

            //act
            let linkText = engineer.getGitHubAccountUrl();

            //assert
            expect(linkText).toEqual("https://github.com/dmobrienllc");
        });
    });

    describe("getIconTag", () => {
        it("should return the string '<i class='fas fa-glasses'></i>'", () => {
            //arrange
            const engineer = new Engineer(1, "David OBrien", "dmobrienllc@gmail.com", "dmobrienllc");

            //act
            let iconTag = engineer.getIconTag();

            //assert
            expect(iconTag).toEqual("<i class='fas fa-glasses'></i>");
        });
    });
});

