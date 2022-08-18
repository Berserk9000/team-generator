const Engineer = require('../lib/engineer');

describe("getGithub", () => {
    it("should retrieve the office number of the engineer", () => {
        const engineer = new Engineer("Ken", 8, "ken@gmail.com", "Berserk9000");

        expect(engineer.getGithub()).toEqual("Berserk9000")
    });
});

describe("getRole", () => {
    it("should retrieve the role of the engineer", () => {
        const engineer = new Engineer("Ken", 8, "Berserk9000",10)
        expect(engineer.getRole()).toEqual("Engineer")
    });
});