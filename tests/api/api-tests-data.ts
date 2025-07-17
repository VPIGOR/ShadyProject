export const adminCreds = {
    username: 'admin',
    password: 'password',
};

export function getPastBookingBody(overrides = {}) {
    return {
        roomid: '5',
        firstname: 'Past',
        lastname: 'Booking',
        depositpaid: false,
        bookingdates: {
            checkin: '2025-01-01',
            checkout: '2025-01-05',
        },
        email: 'past@example.com',
        phone: '123456789055',
        ...overrides,
    };
}

export function getContactFormBody(overrides = {}) {
    return {
        name: 'Igor',
        email: 'igor@example.com',
        phone: '123456789010',
        subject: 'QA Test',
        description: 'Automation test message.',
        ...overrides,
    };
}