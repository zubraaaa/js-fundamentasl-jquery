const fs = require('fs');

test('First task', () => {
    fs.readFile("task2.result.txt", (err,result) =>{
        expect(result.toString()).toBe("Passed");
    })
  });