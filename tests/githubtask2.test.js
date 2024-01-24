const fs = require("fs");

test("First task", () => {
  const data = fs.readFileSync("./tests/task2.result.txt", "utf8");
  expect(data).toBe("Passed");
});
