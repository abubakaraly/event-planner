let events = [];

const createEvent = (event) => {
    events.push(event);
};

const getEvents = (sortBy) => {
    switch (sortBy) {
        case 'date':
            return events.sort((a, b) => new Date(a.date) - new Date(b.date));
        case 'category':
            return events.sort((a, b) => a.category.localeCompare(b.category));
        case 'reminder':
            return events.filter(event => event.reminder);
        default:
            return events;
    }
};

module.exports = { createEvent, getEvents };