use myhotel;
db.dropDatabase(); 

db.bookings.insertMany([
    {
        name: "Kat",
        email: "kat@gmail.com",
        checkedIn: false
    },
    {
        name: "Moath",
        email: "moath@gmail.com",
        checkedIn: true
    },
    {
        name: 'Oskar',
        email: "oskar@gmail.com",
        checkedIn: false
    }
]);