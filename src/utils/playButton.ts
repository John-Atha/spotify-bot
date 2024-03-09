import { Page } from "playwright";
import { delay } from "../helpers/delay";

export const playButton = async (page: Page) => {
  // find the button with data-testid="play-button"
  console.log("Clicking on the play button...");
  const playButton = await page.$("[data-testid=play-button]");
  if (!playButton) {
    throw new Error("Play button not found");
  }
  await playButton.click();
  await delay(5000);
};
