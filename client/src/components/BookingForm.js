import React, {useState} from 'react';

const BookingForm = ({ addBooking }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [checkedIn, setCheckedIn] = useState('false');

    const onSubmit = (e) => {
        e.preventDefault();
        addBooking({
            name: name,
            email: email,
            checkedIn: checkedIn
        });
        setName('');
        setEmail('');
    };


    const checkedInChange = (e) => {
        if(e.target.value === 'true') {
            setCheckedIn(true)
        } else {
            setCheckedIn(false)
        };
    };

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>Customer name:</label>
            <input type='text' id='name' name='name' value={name} required onChange={(e) => setName(e.target.value)}></input>
            
            <label htmlFor='email'>Customer email:</label>
            <input type='text' id='email' name='email' value={email} required onChange={(e) => setEmail(e.target.value)}></input>
            
            <label htmlFor='checkedIn'>Checked in?</label>
            <select id='checkedIn' name='checkedIn' onChange={checkedInChange}>
                <option value='true'>Yes</option>
                <option value='false'>No</option>
            </select>

            <input type='submit' value='Save'></input>
        </form>
    );
};

export default BookingForm;