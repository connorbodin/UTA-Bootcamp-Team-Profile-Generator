const Manager = require("../lib/manager");

test("Should create and return manager as an object", () => {
  const manager = new Manager();
  expect(typeof manager === "object").toBe(true);
});

test("Should grab name of engineer", () => {
  const manager = new Manager("Connor");
  expect(manager.getName()).toBe("Connor");
});
test("Should grab id of manager", () => {
  const manager = new Manager("Connor", 3);
  expect(manager.getId()).toBe(3);
});
test("Should grab email of manager", () => {
  const manager = new Manager("Connor", 3, "connor@email");
  expect(manager.getEmail()).toBe("connor@email");
});
test("Should grab office number of manager", () => {
  const manager = new Manager("Connor", 3, "connor@email", 1);
  expect(manager.getOfficeNumber()).toBe(1);
});