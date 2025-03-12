const { createEvent, getEvents } = require('./events');

createEvent({ name: 'Meeting', description: 'Team meeting', date: '2023-10-01', time: '10:00', category: 'Meetings', reminder: true });
createEvent({ name: 'Birthday', description: 'John\'s birthday', date: '2023-10-05', time: '18:00', category: 'Birthdays', reminder: false });

console.log(getEvents('date'));
console.log(getEvents('category'));
console.log(getEvents('reminder'));