const firstname = require('./person');
const lastname = require('./person');

describe("person comparison", () => {
  test("it should compare two people by first and last name", () => {
    expect(firstname("Connor", "Connor")).toBe("Connor");

    expect(lastname("Bender", "Bender")).toBe("Bender");
  });
});
