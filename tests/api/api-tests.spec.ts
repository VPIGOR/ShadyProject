import { test, expect, request } from '@playwright/test';
import { 
    adminCreds, 
    getPastBookingBody, 
    getContactFormBody, 
    getInvalidCreds,
    getFutureBookingBody,
    HTTP_STATUS,
    API_ENDPOINTS 
} from './api-tests-base';

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

test.describe('API Tests', () => {
    test('Admin login with valid credentials (Positive)', async ({ request }) => {
        const res = await request.post(API_ENDPOINTS.AUTH_LOGIN, {
            data: adminCreds,
        });
        expect(res.status()).toBe(HTTP_STATUS.OK);
        const body = await res.json();
        expect(body.token).toBeDefined();
    });

    // Test for creating a booking in the past - test fails the bug is opened
    //disabled until issue will resolved
    test.skip('Create a booking in the past (Negative)', async ({ request }) => {
        const body = getPastBookingBody();
        const res = await request.post(API_ENDPOINTS.BOOKING, { data: body });
        console.log(`Response status: ${await res.status()}`);
        expect(res.status()).toBeGreaterThanOrEqual(HTTP_STATUS.BAD_REQUEST);
    });

    test('Submit contact form (Positive)', async ({ request }) => {
        const res = await request.post(API_ENDPOINTS.MESSAGE, {
            data: getContactFormBody(),
        });
        expect(res.status()).toBe(HTTP_STATUS.OK);
    });

    test('Admin login with invalid credentials (Negative)', async ({ request }) => {
        const invalidCreds = getInvalidCreds();
        const res = await request.post(API_ENDPOINTS.AUTH_LOGIN, {
            data: invalidCreds,
        });
        expect(res.status()).toBe(HTTP_STATUS.UNAUTHORIZED );
    });

    test('Create a booking with future dates (Positive)', async ({ request }) => {
        const bookingData = getFutureBookingBody();
        const res = await request.post(API_ENDPOINTS.BOOKING, { 
            data: bookingData 
        });
        console.log(`Response status: ${await res.status()}`);
        // Expecting either 200 (OK) or 201 (Created) for successful booking
        expect([HTTP_STATUS.OK, HTTP_STATUS.CREATED]).toContain(res.status());
    });
});