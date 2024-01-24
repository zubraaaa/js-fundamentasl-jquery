const fs = require("fs");

test("First task", () => {
  fs.readFile("task3.result.txt", "utf8", (err, result) => {
    expect(result).toBe("Passed");
  });
  fs.readFile("task4.result.txt", "utf8", (err, result) => {
    expect(result).toBe("Passed");
  });
});
