import { Page } from "playwright";
import { delay } from "./delay";

interface GoToPageProps {
  page: Page;
  url: string;
}

export const goToPage = async ({ page, url }: GoToPageProps) => {
  console.log(`Going to ${url}`);
  await page.goto(url);
  await delay(5000);
};
