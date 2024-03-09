import { Page } from "playwright";
import { delay } from "../helpers/delay";
import { goToPage } from "../helpers/goToPage";

export const goToGoogleAndAcceptCookies = async (page: Page) => {
  await goToPage({ page, url: "https://www.google.com/" });

  // get div with innerText "Accept all"
  const allDivs = await page.$$("div");
  let acceptAllDiv;
  for (let i = 0; i < allDivs.length; i++) {
    const div = allDivs[i];
    const text = await div.innerText();
    if (text === "Accept all") {
      acceptAllDiv = div;
      break;
    }
  }
  if (acceptAllDiv) {
    await acceptAllDiv.click();
  }
  
  await delay(5000);
};
