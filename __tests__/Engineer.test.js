const Engineer = require("../lib/Engineer");

test("Should create and return engineer as an object", () => {
  const engineer = new Engineer();
  expect(typeof engineer === "object").toBe(true);
});

test("Should grab name of engineer", () => {
  const engineer = new Engineer("Connor");
  expect(engineer.getName()).toBe("Connor");
});
test("Should grab id of engineer", () => {
  const engineer = new Engineer("Connor", 2);
  expect(engineer.getId()).toBe(2);
});
test("Should grab email of engineer", () => {
  const engineer = new Engineer("Connor", 2, "connor@fakemail");
  expect(engineer.getEmail()).toBe("connor@fakemail");
});
test('test to see if I can access getGithub()', () => {
    const engineer = new Engineer("Connor", 2, "connor@fakemail", "connorbodin");
    expect(engineer.getGithub()).toBe('connorbodin');
});
