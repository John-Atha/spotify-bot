import { Page } from "playwright";
import { goToPage } from "../helpers/goToPage";
import { acceptCookies } from "./acceptCookies";

export const goToSpotifyAndAcceptCookies = async (page: Page) => {
    await goToPage({ page, url: "https://open.spotify.com/" });
    await acceptCookies(page);
}