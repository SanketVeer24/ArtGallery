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
        setEvents(response.data); // Set the event data in state
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
          key={event.event_id}
          event_name={event.event_name}
          event_desc={event.event_desc}
          event_month={event.event_month}
          event_date={event.event_date}
        />
      ))}
    </div>
  );
}

export default Events;
