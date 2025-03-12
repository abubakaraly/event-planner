const { filterEventsByCategory } = require("./events");

test("Filters events by category", () => {
  const birthdays = filterEventsByCategory("Birthdays");
  expect(birthdays.length).toBe(1);
  expect(birthdays[0].name).toBe("Birthday Party");
});
