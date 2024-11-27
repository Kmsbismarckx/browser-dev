import { chromium } from "playwright";
(async () => {
  const browser = await chromium.launch({
    headless: false,
    timeout: 5000,
    args: ["--start-maximized", "--disable-web-security"],
  });
  const page = await browser.newPage();
})();
