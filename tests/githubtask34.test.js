const fs = require('fs');

test('First task', () => {
    fs.readFile("task3.result.txt", (err,result) =>{
        expect(result.toString()).toBe("Passed");
    })
    fs.readFile("task4.result.txt", (err,result) =>{
        expect(result.toString()).toBe("Passed");
    })
  });