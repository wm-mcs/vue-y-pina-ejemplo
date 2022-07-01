const user = {
  name: "Mauri",
  age: 22
};

test("Mauri es 22", () => {
  expect(user.name).toBe("Mauri");
  expect(user.age).toBe(22);
});
