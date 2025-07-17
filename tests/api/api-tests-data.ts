export const adminCreds = {
    username: 'admin',
    password: 'password',
};

export function getPastBookingBody(overrides = {}) {
    const roomNum = Math.floor(Math.random() * 900 + 100).toString();
    return {
        roomid: roomNum,
        firstname: 'Past',
        lastname: 'Booking',
        depositpaid: false,
        bookingdates: {
            checkin: '2023-01-01',
            checkout: '2023-01-05',
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