const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an Employee object with 'id' number, 'name' string,'email' string, 'iconPath' string", () => {
      const employee = new Employee(1, "John Smith", "jsmith@gmail.com", "icon.src");

      expect(employee).toEqual({ id: 1, name: "John Smith", email: "jsmith@gmail.com", iconPath: "icon.src" });
    });
  });

  describe("getRole", () => {
    it("should return the string 'Employee'", () => {
      //arrange
      const employee = new Employee(1, "John Smith", "jsmith@gmail.com", "icon.src");

      //act
      let title = employee.getRole();

      //assert
      expect(title).toEqual("Employee");
    });
  });
});

//   describe("addChild", () => {
//     it("should add a child to the 'children' array", () => {
//       // Arrange test case
//       const child = new Child("Tammy", 1);
//       const dayCare = new DayCare();

//       // act => run the code
//       dayCare.addChild(child);

//       //Assert results
//       //number of children is correct
//       //the object is actually a 'Child' object
//       expect(dayCare.children.length).toEqual(1);
//       expect(dayCare.children[0]).toBe(child);
//     });

//     it("should not add a child over the 'ageLimit'", () => {
//       const child = new Child("Tammy", 8);
//       const dayCare = new DayCare();

//       dayCare.addChild(child);

//       // TODO: Add a comment describing the purpose of the following statement
//       expect(dayCare.children.length).toEqual(0);
//     });

//     it("should not add a child if already at capacity", () => {
//       const dayCare = new DayCare();
//       const child = new Child("Alice", 4);

//       // TODO: Add a comment describing the purpose of the following expression
//       dayCare.children = [
//         new Child("Tammy", 1),
//         new Child("Mark", 2),
//         new Child("Alvin", 1)
//       ];

//       dayCare.addChild(child);

//       // TODO: Add a comment describing the purpose of the following statement
//       expect(dayCare.children.length).toEqual(3);
//     });

//     it("should throw an error if not provided a Child object as an argument", () => {
//       // TODO: Add a comment describing the purpose of the following declaration
//       const err = new Error(
//         "Expected parameter 'child' to be an instance of Child"
//       );

//       // TODO: Add a comment describing the purpose of the following expression
//       const cb = () => {
//         const dayCare = new DayCare();
//         dayCare.addChild();
//       };

//       // TODO: Add a comment describing the purpose of the following statement
//       expect(cb).toThrowError(err);
//     });
//   });

//   describe("pickupChild", () => {
//     it("should remove the first child found with a given name from 'children' and return it", () => {
//       const dayCare = new DayCare();
//       const child1 = new Child("Tammy", 1);
//       const child2 = new Child("Mark", 2);
//       const child3 = new Child("Alvin", 1);
//       dayCare.children = [child1, child2, child3];

//       // TODO: Add a comment describing the purpose of the following declaration
//       const removed = dayCare.pickupChild(child2.name);

//       expect(removed).toBe(child2);
//       expect(dayCare.children.length).toEqual(2);

//       // TODO: Add a comment describing the purpose of the following statement
//       expect(
//         dayCare.children.some(child => child.name === child2.name)
//       ).toEqual(false);
//     });

//     it("should return undefined and remove no children if child is not in 'children'", () => {
//       const dayCare = new DayCare();
//       const child1 = new Child("Tammy", 1);
//       const child2 = new Child("Mark", 2);
//       const child3 = new Child("Alvin", 1);
//       dayCare.children = [child1, child2, child3];

//       // TODO: Add a comment describing the purpose of the following declaration
//       const removed = dayCare.pickupChild("Fred");

//       // TODO: Add a comment describing the purpose of the following statement
//       expect(typeof removed).toEqual("undefined");

//       // TODO: Add a comment describing the purpose of the following statement
//       expect(dayCare.children).toEqual([child1, child2, child3]);
//     });
//   });

