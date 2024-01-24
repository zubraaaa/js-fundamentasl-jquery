const fs = require("fs");

test("First task", () => {
  fs.readFile("task2.result.txt", "utf8", (err, result) => {
    expect(result).toBe("Passed");
  });
});
