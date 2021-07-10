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
