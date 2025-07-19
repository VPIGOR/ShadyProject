import { get } from "http";

export const adminCreds = {
    username: process.env.ADMIN_USERNAME ,
    password: process.env.ADMIN_PASSWORD,
};

function getRandomString(length = 10) {
    return Math.random().toString(36).substring(2, length + 2);
}

function getRandomEmail() {
    return `${getRandomString(5)}@example.com`; 
}

function getRandomPhone(length = 11) {
    return `1234567890${Math.floor(Math.random() * 10)}`.slice(-length) ;
}


function getRandomDate(daysOffset = 0) {
    const date = new Date();
    date.setDate(date.getDate() + daysOffset);
    return date.toISOString().split('T')[0]; // Format YYYY-MM-DD
}


function getRandomNumber(min = 100, max = 999) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getPastBookingBody(overrides = {}) {
    return {
        roomid: getRandomNumber(100, 999),
        firstname: getRandomString(),
        lastname: getRandomString(),
        depositpaid: false,
        bookingdates: {
            checkin: getRandomDate(-10), // 10 days in the past
            checkout: getRandomDate(-5), // 5 days in the past
        },
        email: getRandomEmail(),
        phone: getRandomPhone(),
        ...overrides,
    };
}


export function getContactFormBody(overrides = {}) {
    return {
        name: getRandomString(7),
        email: getRandomEmail(),
        phone: getRandomPhone(),
        subject: `Subject ${getRandomString(15)}`,
        description: `Description ${getRandomString(50)}`,
        ...overrides,
    };
}


export function getFutureBookingBody(overrides = {}) {
    return {
        roomid: getRandomNumber(100, 999),
        firstname: getRandomString(),
        lastname: getRandomString(),
        depositpaid: true,
        bookingdates: {
            checkin: getRandomDate(7),   // 7 days from today
            checkout: getRandomDate(14), // 14 days from today
        },
        email: getRandomEmail(),
        phone: getRandomPhone(),
        ...overrides,
    };
}


export function getInvalidCreds(overrides = {}) {
    return {
        username: `invalid_${getRandomString(5)}`,
        password: `wrong_${getRandomString(8)}`,
        ...overrides,
    };
}


export function getRoomData(overrides = {}) {
    const roomTypes = ['Single', 'Double', 'Twin', 'Family', 'Suite'];
    return {
        roomNumber: getRandomNumber(100, 999).toString(),
        type: roomTypes[Math.floor(Math.random() * roomTypes.length)],
        price: getRandomNumber(100, 500).toString(),
        accessible: Math.random() < 0.3, // 30% chance of being accessible
        description: `${getRandomString(20)} room with modern amenities`,
        ...overrides,
    };
}

// =============================================================================
// UTILITY CONSTANTS
// =============================================================================

export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
} as const;

export const API_ENDPOINTS = {
    AUTH_LOGIN: '/api/auth/login',
    BOOKING: '/api/booking',
    MESSAGE: '/api/message',
    ROOM: '/api/room'
} as const;