import { Account } from "../types/Account";

export const getRandomAccount = async () => {
  const accounts: Account[] = [];
  for (let i = 1; i <= parseInt(process.env.ACCOUNTS_NUMBER!); i++) {
    const username = process.env[`EMAIL_${i}`];
    const password = process.env[`PASSWORD_${i}`];
    if (!username || !password) {
      throw new Error(`Username or password not found for account ${i}`);
    }
    accounts.push({ username, password });
  }
  const randomIndex = Math.floor(Math.random() * accounts.length);
  return accounts[randomIndex];
};
