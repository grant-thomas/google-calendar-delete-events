// Google Calendar (Delete Events)

function myFunction() {
  // Specify the calendar ID
  var calendarId = '';

  // Specify the start and end date of the range
  var startDate = new Date('2023-12-21T00:00:00'); // Replace with your start date
  var endDate = new Date('2023-12-23T23:59:59');   // Replace with your end date

  // Get the calendar by ID
  var calendar = CalendarApp.getCalendarById(calendarId);

  // Get events within the date range
  var events = calendar.getEvents(startDate, endDate);

  Logger.log('Events in range: ' + events.length);

  // Delete each event
  for (var i = 0; i < events.length; i++) {
    events[i].deleteEvent();
    Logger.log('Event deleted: ' + events[i].getId());
  }
}
