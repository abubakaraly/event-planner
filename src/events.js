const fs = require("fs");

// Load events from JSON file
const eventsFile = "./data/events.json";
const events = JSON.parse(fs.readFileSync(eventsFile));

// Function to list all events
const listEvents = () => {
  console.log("\n📅 Upcoming Events:");
  events.forEach(event => {
    console.log(`- ${event.name} (${event.category}) on ${event.date}`);
  });
};

// Function to filter events by category
const filterEventsByCategory = (category) => {
  return events.filter(event => event.category.toLowerCase() === category.toLowerCase());
};

// Function to check for upcoming reminders
const checkReminders = () => {
  const now = new Date();
  events.forEach(event => {
    const reminderTime = new Date(event.reminder);
    if (reminderTime > now && (reminderTime - now) <= 3600000) { // Within 1 hour
      console.log(`⏰ Reminder: ${event.name} is happening soon!`);
    }
  });
};

// Example usage
listEvents();
console.log("\n🎂 Birthday Events:", filterEventsByCategory("Birthdays"));
checkReminders();

module.exports = { listEvents, filterEventsByCategory, checkReminders };
