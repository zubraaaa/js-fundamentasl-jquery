const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });

    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:5500/index.html'); 
    await page.waitForTimeout(1000);
    const firstElement = await page.evaluate(() => {
        const mainDiv = document.querySelector('.elements-direction'); 
        return mainDiv.firstElementChild.tagName;
      });
      const lastElement = await page.evaluate(() => {
        const mainDiv = document.querySelector('.elements-direction'); 
        return mainDiv.lastElementChild.tagName;
      });

    if(firstElement === "DIV" && lastElement === "H3"){
        console.log("Elements is successfully swapped");
        fs.writeFileSync('tests/task3.result.txt', "Passed");
    }

    
    
    await browser.close();
})();