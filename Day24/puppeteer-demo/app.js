const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://ithelp.ithome.com.tw/articles/10293113");
  await page.screenshot({ path: "demo.png" });
  await browser.close();
})();
