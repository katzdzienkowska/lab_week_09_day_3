import React, {useState, useEffect} from 'react';
import BookingList from '../components/BookingList';
import BookingForm from '../components/BookingForm';

import { getBookings, postBooking, deleteBooking, updateBooking} from '../BookingService'

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
    const changeBooking = (bookingToChange) => {
        updateBooking(bookingToChange)
        .then(() => {
          const bookingIndex = bookings.findIndex(booking => booking._id === bookingToChange._id);
          const copyBookings = [...bookings];
          copyBookings[bookingIndex].checkedIn = bookingToChange.checkedIn;
          setBookings(copyBookings);
        });
      };


    return(
        <>
        <BookingForm addBooking={addBooking}/>
        <BookingList bookings={bookings} removeBooking={removeBooking} changeBooking={changeBooking}/>
        </>
    )    

};

export default BookingContainer;