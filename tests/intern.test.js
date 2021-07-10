const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an Intern object with 'id' number, 'name' string,'email' string, 'iconPath' string, 'school' string", () => {
            //Arrange
            const intern = new Intern(1, "David OBrien", "dmobrienllc@gmail.com", "MIT");

            //Assert
            expect(intern).toEqual({ id: 1, name: "David OBrien", email: "dmobrienllc@gmail.com", iconPath: "intern-icon-path", school: "MIT" });
        });
    });

    describe("getRole", () => {
        it("should return the string 'Intern'", () => {
            //arrange
            const intern = new Intern(1, "David OBrien", "dmobrienllc@gmail.com", "MIT");

            //act
            let role = intern.getRole();

            //assert
            expect(role).toEqual("Intern");
        });
    });

    describe("getSchool", () => {
        it("should return the string 'https://github.com/dmobrienllc'", () => {
            //arrange
            const intern = new Intern(1, "David OBrien", "dmobrienllc@gmail.com", "MIT");

            //act
            let school = intern.getSchool();

            //assert
            expect(school).toEqual("MIT");
        });
    });

    describe("getID", () => {
        it("should return the number '5' from the super class", () => {
            //arrange
            const intern = new Intern(5, "David OBrien", "dmobrienllc@gmail.com", "MIT");

            //act
            let id = intern.getId();

            //assert
            expect(id).toEqual(5);
        });
    });
});

