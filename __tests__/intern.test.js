const Intern = require('../lib/intern');

describe("getSchool", () => {
    it("should retrieve the office number of the intern", () => {
        const intern = new Intern("Ken", 8, "ken@gmail.com", "UM");

        expect(intern.getSchool()).toEqual("UM")
    });
});

describe("getRole", () => {
    it("should retrieve the role of the intern", () => {
        const intern = new Intern("Ken", 8, "ken@gmail.com", 10);

        expect(intern.getRole()).toEqual("Intern")
    });
});