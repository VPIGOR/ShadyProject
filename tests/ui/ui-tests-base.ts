// ui-tests-base.ts
export const adminLoginCreds = {
    username: process.env.ADMIN_USERNAME ,
    password: process.env.ADMIN_PASSWORD,
};

function getRandomString(length = 10) {
    return Math.random().toString(36).substring(2, length + 2);
}

function getRandomName(minLength = 5, maxLength = 12) {
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    const name = getRandomString(length);
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function getRandomEmail() {
    return `${getRandomString(8)}@test.com`; 
}

function getRandomPhone(length = 12) {
    return `123456789${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`.slice(0, length);
}

function getRandomNumber(min = 100, max = 999) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRoomTestData(overrides = {}) {
    const roomTypes = ['Single', 'Double', 'Twin', 'Family', 'Suite'];
    const selectedType = roomTypes[Math.floor(Math.random() * roomTypes.length)];
    
    return {
        roomNumber: getRandomNumber(100, 999).toString(),
        roomType: selectedType,
        roomPrice: getRandomNumber(100, 500).toString(),
        accessible: Math.random() < 0.3, // 30% chance of being accessible
        description: `${selectedType} room with modern amenities and ${getRandomString(10)} features`,
        ...overrides,
    };
}

export function getContactFormTestData(overrides = {}) {
    return {
        name: getRandomName(),
        email: getRandomEmail(),
        phone: getRandomPhone(),
        subject: `Test Subject ${getRandomString(15)}`,
        message: `This is a test message about ${getRandomString(30)} with additional details.`,
        ...overrides,
    };
}

export function getInvalidLoginCreds(overrides = {}) {
    return {
        username: `invalid_${getRandomString(6)}`,
        password: `wrong_${getRandomString(8)}`,
        ...overrides,
    };
}

export const UI_TIMEOUTS = {
    SHORT: 2000,    // 2 seconds
    MEDIUM: 5000,   // 5 seconds
    LONG: 10000,    // 10 seconds
    EXTRA_LONG: 30000 // 30 seconds
} as const;


export const ROOM_TYPES = [
    'Single',
    'Double', 
    'Twin',
    'Family',
    'Suite'
] as const;
