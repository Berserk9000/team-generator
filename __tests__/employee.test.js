const Employee = require('../lib/Employee');

describe("getName", () => {
    it("should retrieve the name of the Employee", () => {
        const employee = new Employee("Ken", 8, "ken@gmail.com");

        expect(employee.getName()).toEqual("Ken")
    });
});

describe("getID", () => {
    it("should retrieve the ID of the Employee", () => {
        const employee = new Employee("Ken", 8, "ken@gmail.com");

        expect(employee.getId()).toEqual(8)
    });
});

describe("getEmail", () => {
    it("should retrieve the email of the Employee", () => {
        const employee = new Employee("Ken", 8, "ken@gmail.com");

        expect(employee.getEmail()).toEqual("ken@gmail.com")
    });
});

describe("getRole", () => {
    it("should retrieve the role of the Employee", () => {
        const employee = new Employee("Ken", 8, "ken@gmail.com");

        expect(employee.getRole()).toEqual("Employee")
    });
});
  