const fs = require('fs');

test('First task', () => {
    fs.readFile("githubtask1.result.txt", (err,result) =>{
        expect(result.toString()).toBe("First+Second")
    })
    
  });