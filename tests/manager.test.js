const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an Manager object with 'id' number, 'name' string,'email' string, 'iconPath' string, 'officeNumber' string", () => {
            //Arrange
            const manager = new Manager(1, "David OBrien", "dmobrienllc@gmail.com", "icon.src", 99);

            //Assert
            expect(manager).toEqual({ id: 1, name: "David OBrien", email: "dmobrienllc@gmail.com", iconPath: "icon.src", officeNumber: 99 });
        });
    });

    describe("getRole", () => {
        it("should return the string 'Manager'", () => {
            //arrange
            const manager = new Manager(1, "David OBrien", "dmobrienllc@gmail.com", "icon.src", 99);

            //act
            let role = manager.getRole();

            //assert
            expect(role).toEqual("Manager");
        });
    });

    describe("getOfficeNumber", () => {
        it("should return the string 'https://github.com/dmobrienllc'", () => {
            //arrange
            const manager = new Manager(5, "David OBrien", "dmobrienllc@gmail.com", "icon.src", 99);

            //act
            let officeNumber = manager.getOfficeNumber();

            //assert
            expect(officeNumber).toEqual(99);
        });
    });

    describe("getID", () => {
        it("should return the number '5' from the super class", () => {
            //arrange
            const manager = new Manager(5, "David OBrien", "dmobrienllc@gmail.com", "icon.src", 99);

            //act
            let id = manager.getId();

            //assert
            expect(id).toEqual(5);
        });
    });
});

