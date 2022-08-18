const Manager = require('../lib/manager');

describe("getOfficeNum", () => {
    it("should retrieve the office number of the manager", () => {
        const manager = new Manager("Ken", 8, "ken@gmail.com", 10);

        expect(manager.getOfficeNum()).toEqual(10)
    });
});

describe("getRole", () => {
    it("should retrieve the role of the manager", () => {
        const manager = new Manager("Ken", 8, "Ken@gmail.com", 10);

        expect(manager.getRole()).toEqual("Manager")
    });
});