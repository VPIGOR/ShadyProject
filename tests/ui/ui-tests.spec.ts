import { test, expect } from '@playwright/test';
import { AdminRoomPage } from './pages/AdminRoomPage';
import { MainPage } from './pages/MainPage';
import { LoginPage } from './pages/LoginPage';

test.beforeEach(async ({}, testInfo) => {
    console.log(`Starting test: ${testInfo.title}`);
});

test.afterEach(async ({}, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        console.error(`Test failed: ${testInfo.title}`);
        if (testInfo.error) {
            console.error(`Error: ${testInfo.error.message}`);
        }
    } else {
        console.log(`Test passed: ${testInfo.title}`);
    }
});

test.describe('UI Tests', () => {
  
  test('Create a new room without details (Positive)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
    const roomPage = new AdminRoomPage(page);
    const roomNum = Math.floor(Math.random() * 900 + 100).toString();
    const roomType = 'Single';
    const roomPrice = Math.floor(Math.random() * 900 + 100).toString();
    console.log(`Creating room with number: ${roomNum}`);
    await roomPage.createRoom(roomNum, roomType, roomPrice);
    expect(await roomPage.isRoomVisible(roomNum)).toBe(true);
  });

  test('Submit contact form without name (Negative)', async ({ page }) => {
    await page.goto('/');
    const contact = new MainPage(page);
    await contact.submitContactForm('email@test.com', '123456789054', 'Test Subject', 'This is a test message.');
    expect(await contact.isSuccessMessageVisible()).toBe(false);
  });
});