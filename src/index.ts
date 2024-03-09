import { chromium } from "playwright";
import { goToPage } from "./helpers/goToPage";
import { acceptCookies } from "./utils/acceptCookies";
import { login } from "./utils/login";
import dotenv from "dotenv";

console.log("Hello, world!");

const main = async () => {
  dotenv.config();
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await goToPage({ page, url: "https://www.google.com/" });
    await goToPage({ page, url: "https://open.spotify.com/" });
    await acceptCookies(page);
    await login(page);

    console.log("Closing the browser");
    await browser.close();

    console.log("Done!");
};

main();
