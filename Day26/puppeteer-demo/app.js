const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage({});
  page.setViewport({
    width: 1200,
    height: 800,
  });
  await page.goto("https://quotes.toscrape.com/");
  // 點擊登入按鈕
  await page.click('a[href="/login"]');

  // 輸入帳號
  await page.type("#username", "windate3411");

  // 輸入密碼
  await page.type("#password", "1234");

  // 點擊提交按鈕
  await page.click('input[type="submit"]');

  // 稍等一下再進行下一步
  await page.waitForTimeout(3000);

  await page.click('a[href="/tag/love/"]');

  browser.close();
})();
