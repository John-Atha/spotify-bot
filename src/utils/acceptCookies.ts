import { Page } from "playwright";
import { delay } from "../helpers/delay";

export const acceptCookies = async (page: Page) => {
  console.log("Accepting cookies...");
  const acceptCookiesButton = await page.$("#onetrust-accept-btn-handler");
  if (!acceptCookiesButton) {
    console.log("Accept cookies button not found");
    return;
  }
  await acceptCookiesButton.click();
  await delay(5000);
};
