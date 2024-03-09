import { Page } from "playwright";
import { delay } from "../helpers/delay";
import { getRandomAccount } from "../helpers/getAccounts";

export const login = async (page: Page) => {
  const account = await getRandomAccount();
  console.log(`Loggin in as ${account.username}...`);

  const loginButton = await page.$("[data-testid=login-button]");
  if (!loginButton) {
    console.log("Login button not found");
    return;
  }
  await loginButton.click();
  await delay(5000);

  // get input with id="login-username"
  const usernameInput = await page.$("#login-username");
  if (!usernameInput) {
    throw new Error("Username input not found");
  }
  await usernameInput.fill(account.username);
  await delay(5000);

  // get input with id="login-password"
  const passwordInput = await page.$("#login-password");
  if (!passwordInput) {
    throw new Error("Password input not found");
  }
  await passwordInput.fill(account.password);
  await delay(5000);

  // get button with id="login-button"
  const submitButton = await page.$("#login-button");
  if (!submitButton) {
    throw new Error("Submit button not found");
  }
  await submitButton.click();

  await delay(5000);
};
