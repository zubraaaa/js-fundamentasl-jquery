const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });

    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:5500/index.html'); 
    await page.waitForTimeout(1000);
    const h2Element = await page.evaluate(() => {
        const h1Element = document.querySelector('h2.head');
        return getComputedStyle(h1Element).backgroundColor; 
      });

      const spanInnerFontSize = await page.evaluate(() => {
        const h1Element = document.querySelector('h2 .inner'); 
        return getComputedStyle(h1Element).fontSize; 
      });


      if(h2Element === 'rgb(0, 128, 0)'){
        console.log("Green color is applied");
      }
      if(spanInnerFontSize === "35px"){
        console.log("Fontsize 35px is applied");
      }
    
    
    await browser.close();
})();