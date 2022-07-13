import React from 'react';
import BookingItem from './BookingItem'

const BookingList = ({bookings, removeBooking, changeBooking}) => {

    const bookingNodes = bookings.map((booking) => {
        
        return <BookingItem key={booking._id} id={booking._id} name={booking.name} email={booking.email} checkedIn={booking.checkedIn} removeBooking={removeBooking} changeBooking={changeBooking}/>

    });

    return(
        <>
            <h2>Current bookings:</h2>
            <ul>{bookingNodes}</ul>
        </>
    );
};

export default BookingList;