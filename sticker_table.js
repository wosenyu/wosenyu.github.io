// variable to store a date of August 30, 2018
var thisDay= new Date("August 30, 2018");

// variable and html code to add the text to the event table on the webpage
var tableHTML="<table id='eventTable'>";
tableHTML += "<caption>Upcoming Events</caption>";
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

// variable to set the ending date for the event list within 14 days from the current date
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

// a for loop to look through the eventdate array and display the data in the webpage if the event date is within the 14 day window
for (var i = 0; i < eventDates.length; i++) {
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();

   if (thisDay <= eventDate && eventDate <= endDate) {
      tableHTML += "<tr>";
      tableHTML += "<td>" + eventDay + " @ " + eventTime + "</td>";
      tableHTML += "<td>" + eventDescriptions[i] + "</td>";
      tableHTML += "<td>" + eventPrices[i] + "</td>";
      tableHTML += "</tr>";
   }
}

tableHTML += "</table>";

// get id eventList from html to print the data to it
document.getElementById("eventList").innerHTML = tableHTML;