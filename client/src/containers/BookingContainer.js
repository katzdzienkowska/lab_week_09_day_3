import React, {useState, useEffect} from 'react';
import BookingList from '../components/BookingList';
import BookingForm from '../components/BookingForm';

import { getBookings, postBooking, deleteBooking} from '../BookingService'

const BookingContainer = () => {

    const [bookings, setBookings] = useState([]);

    // get all bookings:
    useEffect(() => {
        getBookings().then((allbookings) => {
            setBookings(allbookings)
        });
    }, []);


    // add Booking
    const addBooking = (booking) => {
        postBooking(booking)
        .then((booking) => {
        const bookingsCopy = [...bookings];
        // console.log(booking)
        bookingsCopy.push(booking);
        setBookings(bookingsCopy)
        });
    };


    // delete Booking
    const removeBooking = (id) => {
        deleteBooking(id)
        .then(() => {
            const bookingIndex = bookings.findIndex((booking) => booking._id === id);
            const bookingsCopy = [...bookings];
            bookingsCopy.splice(bookingIndex, 1);
            setBookings(bookingsCopy)
        });
    };


    // edit Booking



    return(
        <>
        <BookingForm addBooking={addBooking}/>
        <BookingList bookings={bookings} removeBooking={removeBooking}/>
        </>
    )    

};

export default BookingContainer;