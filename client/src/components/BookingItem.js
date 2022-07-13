import React from 'react';

const BookingItem = ({id, name, email, checkedIn, removeBooking}) => {

    const handleDelete = () => {
        removeBooking(id);
    };

    return(
        <li>
            <p>Customer name: {name}</p>
            <p>Customer email: {email}</p>
            <p>Checked in? {checkedIn ? 'Yes' : 'No'}</p>
            <button onClick={handleDelete}>Delete booking</button>
        </li>
    );
};

export default BookingItem;