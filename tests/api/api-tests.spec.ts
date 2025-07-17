import { test, expect, request } from '@playwright/test';
import { adminCreds, getPastBookingBody, getContactFormBody } from './api-tests-data';

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
        const res = await request.post('/api/auth/login', {
            data: adminCreds,
        });
        expect(res.status()).toBe(200);
        const body = await res.json();
        expect(body.token).toBeDefined();
    });

    test('Create a booking in the past (Negative)', async ({ request }) => {
        const body = getPastBookingBody();
        const res = await request.post('/api/booking', { data: body });
        console.log(`Response status: ${await res.status()}`);
        expect(res.status()).toBeGreaterThanOrEqual(400);
    });

    test('Submit contact form (Positive)', async ({ request }) => {
        const res = await request.post('/api/message', {
            data: getContactFormBody(),
        });
        expect(res.status()).toBe(200);
    });

    test('Admin login with invalid credentials (Negative)', async ({ request }) => {
        const invalidCreds = {
            username: 'invalid',
            password: 'invalid'
        };
        const res = await request.post('/api/auth/login', {
            data: invalidCreds,
        });
        expect(res.status()).toBe(401);
    });
});