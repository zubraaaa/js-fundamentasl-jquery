const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });

    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:5500/index.html'); 
    await page.waitForTimeout(1000);
   
    const first = await page.$(".first");
    const second = await page.$(".second");
    const third = await page.$(".third");

    await first.click();
    await second.click();
    await third.click();

    



    const isElementDisabled = await page.evaluate(() => {
      const element = document.querySelector('.first'); 
      return element ? element.disabled : null; 
    });
  
    if (isElementDisabled !== null) {
      console.log(`Is the elements disabled? ${isElementDisabled}`);
      fs.writeFileSync('tests/task4.result.txt', "Passed");
    } else {
      console.log('Element not found');
    }
    
    
    await browser.close();
})();