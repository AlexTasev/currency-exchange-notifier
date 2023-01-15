const puppeteer = require("puppeteer");
const { url } = require("./app-data");

const getPriceData = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(url);
  await page.waitForSelector("button[aria-label='Accept all']");
  await page.click("button[aria-label='Accept all']");
  await page.waitForNavigation();

  const currentPrice = await page.evaluate(() =>
    document.querySelector("[data-last-price]").getAttribute("data-last-price"),
  );

  browser.close();

  return Number(currentPrice);
};

module.exports = getPriceData;
