import React, { useState, useEffect } from "react";
import EventElement from "./EventElement";
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch event data from API
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://661ea68d16358961cd927f00.mockapi.io/events"
        );

        // Parse and format dates for each event
        const formattedEvents = response.data.map((event) => {
          const eventDate = new Date(event.doe).toLocaleString("en-us", {
            timeZone: "UTC",
            day: "numeric",
          });
          const eventMonth = new Date(event.doe).toLocaleDateString("en-us", {
            month: "short",
            timeZone: "UTC",
          });

          return {
            ...event,
            eventMonth: eventMonth,
            eventDate: eventDate,
          };
        });

        // Set the event data with formatted dates in state
        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="eventsContainer">
      {events.map((event) => (
        <EventElement
          key={event.eventId}
          eventId={event.eventId}
          eventName={event.eventName}
          eventType={event.eventType}
          eventDesc={event.eventDesc}
          eventMonth={event.eventMonth}
          eventDate={event.eventDate}
        />
      ))}
    </div>
  );
}

export default Events;
