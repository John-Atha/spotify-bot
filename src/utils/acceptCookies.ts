import { Page } from "playwright";
import { delay } from "../helpers/delay";

export const acceptCookies = async (page: Page) => {
  console.log("Accepting cookies...");
  const acceptCookiesButton = await page.$("#onetrust-accept-btn-handler");
  if (!acceptCookiesButton) {
    throw new Error("Accept cookies button not found");
  }
  await acceptCookiesButton.click();
  await delay(5000);
};
