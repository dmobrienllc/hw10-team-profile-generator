const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an Intern object with 'id' number, 'name' string,'email' string, 'iconPath' string, 'school' string", () => {
            //Arrange
            const intern = new Intern(1, "David OBrien", "dmobrienllc@gmail.com", "MIT");

            //Assert
            expect(intern).toEqual({ id: 1, name: "David OBrien", email: "dmobrienllc@gmail.com", iconPath: "<i class='fas fa-user-graduate'></i>", school: "MIT" });
        });
    });

    describe("getName", () => {
        it("should return the string 'David OBrien'", () => {
            //arrange
            const intern = new Intern(1, "David OBrien", "dmobrienllc@gmail.com", "MIT");

            //act
            let name = intern.getName();

            //assert
            expect(name).toEqual("David OBrien");
        });
    });

    describe("getEmail", () => {
        it("should return the string 'dmobrienllc@gmail.com'", () => {
            //arrange
            const intern = new Intern(1, "David OBrien", "dmobrienllc@gmail.com", "MIT");

            //act
            let email = intern.getEmail();

            //assert
            expect(email).toEqual("dmobrienllc@gmail.com");
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

    describe("getIconTag", () => {
        it("should return the string '<i class='fas fa-user-graduate'></i>'", () => {
            //arrange
            const intern = new Intern(1, "David OBrien", "dmobrienllc@gmail.com", "MIT");

            //act
            let iconTag = intern.getIconTag();

            //assert
            expect(iconTag).toEqual("<i class='fas fa-user-graduate'></i>");
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

