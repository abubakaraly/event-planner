const express = require('express');
const bodyParser = require('body-parser');
const events = require('./js/events');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/events', (req, res) => {
    const event = req.body;
    events.createEvent(event);
    res.status(201).send('Event created');
});

app.get('/events', (req, res) => {
    const sortedEvents = events.getEvents(req.query.sortBy);
    res.status(200).json(sortedEvents);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});