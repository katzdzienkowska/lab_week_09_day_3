const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

    const router = express.Router();

    // show all bookings:
    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    });

    // show one booking:
    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .findOne({ _id: ObjectID(id) })
        .then((doc) => res.json(doc))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    });

    // create a new booking:
    router.post('/', (req, res) => {
        const newBooking = req.body;
        console.log(newBooking);
        collection
        .insertOne(newBooking)
        .then((result) => {
            const booking = {...newBooking}
            booking._id = result.insertedId
            res.json(booking)
            })
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    });

    // Delete a booking:
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .deleteOne({ _id: ObjectID(id) })
        .then((result) => res.json(result))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    });
    
    // Edit a booking:
    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedBooking = req.body;
        collection
        .updateOne({ _id: ObjectID(id) }, { $set: updatedBooking })
        .then((result) => res.json(result))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    });

    return router;
};

module.exports = createRouter;