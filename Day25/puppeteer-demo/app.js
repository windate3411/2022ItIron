const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.youtube.com/");
  const content = await page.evaluate(() => {
    const titleElements = document.querySelectorAll("#video-title");
    const titles = [];
    titleElements.forEach((titleElement) =>
      titles.push(titleElement.innerText)
    );
    return titles;
  });
  console.log(content);
  browser.close();
})();
