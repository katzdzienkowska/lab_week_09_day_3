import React from 'react';
import BookingItem from './BookingItem'

const BookingList = ({bookings, removeBooking}) => {

    const bookingNodes = bookings.map((booking) => {
        
        return <BookingItem key={booking._id} id={booking._id} name={booking.name} email={booking.email} checkedIn={booking.checkedIn} removeBooking={removeBooking}/>

    });

    return(
        <>
            <h2>Current bookings:</h2>
            <ul>{bookingNodes}</ul>
        </>
    );
};

export default BookingList;