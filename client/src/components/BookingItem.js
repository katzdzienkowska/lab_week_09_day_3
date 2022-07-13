import React from 'react';

const BookingItem = ({id, name, email, checkedIn, removeBooking, changeBooking}) => {

    const handleDelete = () => {
        removeBooking(id);
    };

    const handleCheckedinStatus = () => {
        changeBooking({    
            _id: id,
            name: name,
            email: email,
            checkedIn: !checkedIn
        });
    };

    return(
        <li>
            <p>Customer name: {name}</p>
            <p>Customer email: {email}</p>
            <p>Checked in? {checkedIn ? 'Yes' : 'No'}</p> <button onClick={handleCheckedinStatus}>Change Status</button>
            <button onClick={handleDelete}>Delete booking</button>
        </li>
    );
};

export default BookingItem;