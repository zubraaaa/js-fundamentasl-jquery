const fs = require("fs");

test("First task", () => {
  const data = fs.readFileSync("./tests/githubtask1.result.txt", "utf8");
  expect(data).toBe("First+Second");
});
