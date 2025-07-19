import { test, expect } from '@playwright/test';
import { AdminRoomPage } from './pages/AdminRoomPage';
import { MainPage } from './pages/MainPage';
import { LoginPage } from './pages/LoginPage';
import { 
    adminLoginCreds, 
    getRoomTestData, 
    getContactFormTestData,
    getInvalidLoginCreds,
    UI_TIMEOUTS
} from './ui-tests-base';

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
  
  test('Create a new room with generated data (Positive)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
    
    const roomPage = new AdminRoomPage(page);
    const roomData = getRoomTestData();
    
    console.log(`Creating room with number: ${roomData.roomNumber}`);
    await roomPage.createRoom(roomData.roomNumber, roomData.roomType, roomData.roomPrice);
    expect(await roomPage.isRoomVisible(roomData.roomNumber)).toBe(true);
  });

  test('Submit contact form without name (Negative)', async ({ page }) => {
    await page.goto('/');
    const contact = new MainPage(page);
    
    // Generate contact form data but override name to be empty
    const contactData = getContactFormTestData({ name: '' });
    
    await contact.submitContactForm(
      contactData.name,    // empty name
      contactData.email, 
      contactData.phone, 
      contactData.subject, 
      contactData.message
    );
    expect(await contact.isAlertVisible()).toBe(true);
  });

  test('Submit complete contact form (Positive)', async ({ page }) => {
    await page.goto('/');
    const contact = new MainPage(page);
    
    // Generate complete contact form data
    const contactData = getContactFormTestData();
    
    await contact.submitContactForm(
      contactData.name,
      contactData.email, 
      contactData.phone, 
      contactData.subject, 
      contactData.message
    );
    // Expect success message to be visible
    expect(await contact.isSuccessMessageVisible()).toBe(true);
  });

  test('Login with invalid credentials (Negative)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const invalidCreds = getInvalidLoginCreds();
    
    await loginPage.login(invalidCreds.username, invalidCreds.password);
    
    // Expect login to fail (error toast should be visible)
    expect(await loginPage.isLoginFailed()).toBe(true);
  });

  test('Create room with different room types (Data-driven)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login();
    
    const roomPage = new AdminRoomPage(page);
    
    // Test with different room types
    const roomTypes = ['Single', 'Double', 'Suite'];
    
    for (const roomType of roomTypes) {
      const roomData = getRoomTestData({ roomType });
      
      console.log(`Creating ${roomType} room with number: ${roomData.roomNumber}`);
      await roomPage.createRoom(roomData.roomNumber, roomData.roomType, roomData.roomPrice);
      expect(await roomPage.isRoomVisible(roomData.roomNumber)).toBe(true);
    }
  });
});