const baseURL = 'http://localhost:9001/api/bookings/';

// fetch all the bookings:
export const getBookings = () => {
    return fetch(baseURL)
    .then(result => result.json());
};

// create a new booking:
export const postBooking = (booking) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(result => result.json());
};

// delete a booking:
export const deleteBooking = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    });
};

// update a booking:
export const updateBooking = (booking) => {
    return fetch(baseURL + booking._id, {
        method: 'PUT',
        body: JSON.stringify({
            name: booking.name,
            email: booking.email,
            checkedIn: booking.checkedIn
        }),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json());
};
