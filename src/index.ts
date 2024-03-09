import { chromium } from "playwright";
import { goToPage } from "./helpers/goToPage";
import { login } from "./utils/login";
import { playButton } from "./utils/playButton";
import { goToGoogleAndAcceptCookies } from "./utils/goToGoogleAndAcceptCookies";
import { goToSpotifyAndAcceptCookies } from "./utils/goToSpotifyAndAcceptCookies";
import dotenv from "dotenv";

const main = async () => {
  dotenv.config();
  const browser = await chromium.launch({ headless: false });

  // Use the saved storage state, if it exists, to avoid logging in again
  const context = await browser
    .newContext({
      storageState: "storageState.json",
    })
    .then((context) => {
      return context;
    })
    .catch((error) => {
      console.log("Error: ", error);
      return browser.newContext();
    });
  
  const page = await context.newPage();

  await goToGoogleAndAcceptCookies(page);
  await context.storageState({ path: "storageState.json" });
  await goToSpotifyAndAcceptCookies(page);
  await context.storageState({ path: "storageState.json" });
  await login(page);
  await context.storageState({ path: "storageState.json" });

  // await searchForArtist(page, process.env.ARTIST_1!);
  await goToPage({
    page,
    url: `https://open.spotify.com/artist/${process.env.ARTIST_1_ID}`,
  });
  await playButton(page);

  console.log("Closing the browser");
  await browser.close();

  console.log("Done!");
};

main();
