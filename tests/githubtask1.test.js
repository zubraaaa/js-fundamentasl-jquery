const fs = require("fs");

test("First task", () => {
  fs.readFile("githubtask1.result.txt", "utf8", (err, result) => {
    expect(result).toBe("First+Second");
  });
});
