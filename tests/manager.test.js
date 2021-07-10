const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an Manager object with 'id' number, 'name' string,'email' string, 'iconPath' string, 'officeNumber' string", () => {
            //Arrange
            const manager = new Manager(1, "David OBrien", "dmobrienllc@gmail.com", 99);

            //Assert
            expect(manager).toEqual({ id: 1, name: "David OBrien", email: "dmobrienllc@gmail.com", iconPath: "<i class='fas fa-mug-hot'></i>", officeNumber: 99 });
        });
    });

    describe("getName", () => {
        it("should return the string 'David OBrien'", () => {
            //arrange
            const manager = new Manager(1, "David OBrien", "dmobrienllc@gmail.com", 99);

            //act
            let name = manager.getName();

            //assert
            expect(name).toEqual("David OBrien");
        });
    });

    describe("getEmail", () => {
        it("should return the string 'dmobrienllc@gmail.com'", () => {
            //arrange
            const manager = new Manager(1, "David OBrien", "dmobrienllc@gmail.com", 99);

            //act
            let email = manager.getEmail();

            //assert
            expect(email).toEqual("dmobrienllc@gmail.com");
        });
    });

    describe("getRole", () => {
        it("should return the string 'Manager'", () => {
            //arrange
            const manager = new Manager(1, "David OBrien", "dmobrienllc@gmail.com", 99);

            //act
            let role = manager.getRole();

            //assert
            expect(role).toEqual("Manager");
        });
    });

    describe("getOfficeNumber", () => {
        it("should return the string 'https://github.com/dmobrienllc'", () => {
            //arrange
            const manager = new Manager(5, "David OBrien", "dmobrienllc@gmail.com", 99);

            //act
            let officeNumber = manager.getOfficeNumber();

            //assert
            expect(officeNumber).toEqual(99);
        });
    });

    describe("getIconTag", () => {
        it("should return the string '<i class='fas fa-mug-hot'></i>'", () => {
            //arrange
            const manager = new Manager(5, "David OBrien", "dmobrienllc@gmail.com", 99);

            //act
            let iconTag = manager.getIconTag();

            //assert
            expect(iconTag).toEqual("<i class='fas fa-mug-hot'></i>");
        });
    });

    describe("getID", () => {
        it("should return the number '5' from the super class", () => {
            //arrange
            const manager = new Manager(5, "David OBrien", "dmobrienllc@gmail.com", 99);

            //act
            let id = manager.getId();

            //assert
            expect(id).toEqual(5);
        });
    });
});

