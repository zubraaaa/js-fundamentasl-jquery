const fs = require("fs");

test("First task", () => {
  const data1 = fs.readFileSync("./tests/task3.result.txt", "utf8");
  expect(data1).toBe("Passed");
  const data2 = fs.readFileSync("./tests/task4.result.txt", "utf8");
  expect(data2).toBe("Passed");
});
