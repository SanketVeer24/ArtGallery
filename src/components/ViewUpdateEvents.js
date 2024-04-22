import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Logo from "../images/logo.png";
import Navbar from "./Navbar";
import axios from "axios";

const localizer = momentLocalizer(moment); // Setup the localizer by providing moment

function ViewUpdateEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch event data from API
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "https://661ea68d16358961cd927f00.mockapi.io/events"
        );
        const fetchedData = response.data;
        const updatedEvents = fetchedData.map((event) => ({
          ...event,
          start: new Date(event.doe + "T" + event.startTime),
          end: new Date(event.doe + "T" + event.endTime),
          title: event.eventName,
        }));

        setEvents(updatedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const [editEvent, setEditEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    eventId: "",
    eventName: "",
    eventType: "",
    doe: "",
    startTime: "",
    endTime: "",
    eventDesc: "",
  });

  const handleInputChange = (e, isEdit = true) => {
    const { name, value } = e.target;
    if (isEdit) {
      setEditEvent((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setNewEvent((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleUpdateEvent = async () => {
    const updatedEvents = events.map((event) =>
      event.eventId === editEvent.eventId ? { ...event, ...editEvent } : event
    );
    setEvents(updatedEvents);
    setEditEvent(null);
    //Post API
  };

  const handleAddEvent = async () => {
    const newEventToAdd = {
      ...newEvent,
      start: new Date(newEvent.doe + "T" + newEvent.startTime),
      end: new Date(newEvent.doe + "T" + newEvent.endTime),
      title: newEvent.eventName,
    };
    setEvents([...events, newEventToAdd]);
    setNewEvent({
      eventId: "",
      eventName: "",
      eventType: "",
      doe: "",
      startTime: "",
      endTime: "",
      eventDesc: "",
    });
    try {
      const response = await axios.post(
        "https://661ea68d16358961cd927f00.mockapi.io/events",
        newEventToAdd
      );
      if (!response.ok) {
        console.log("Error adding event.");
      }
    } catch (error) {
      console.log("Error adding event.");
    }
  };

  return (
    <div>
      {" "}
      <Navbar page="admin"></Navbar>
      <div id="viewUpdateContainer">
        <div className="viewUpdateHeader">
          <img src={Logo} alt="Logo"></img>
          <h2>Event Calendar</h2>
        </div>
        <div className="updateSections">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "20px 0 50px 0" }}
          />
        </div>
        <div className="updateSections">
          <div className="viewUpdateHeader">
            <img src={Logo} alt="Logo"></img>
            <h2>Edit & View Event Details</h2>
          </div>

          <table id="editTable">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.eventId}>
                  <td>{event.eventId}</td>
                  <td>{event.eventName}</td>
                  <td>{event.eventType}</td>
                  <td>{event.doe}</td>
                  <td>{event.startTime}</td>
                  <td>{event.endTime}</td>
                  <td>{event.eventDesc}</td>
                  <td className="updateCell">
                    <button
                      className="updateBtn"
                      onClick={() => setEditEvent(event)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
        </div>
        {editEvent && (
          <div>
            <div className="viewUpdateHeader">
              <img src={Logo} alt="Logo" />
              <h2>Edit Event</h2>
            </div>
            <form id="editEventForm" className="editContainer">
              <input type="hidden" value={editEvent.eventId} />
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="eventName"
                  value={editEvent.eventName}
                  onChange={(e) => handleInputChange(e, true)}
                />
              </div>
              <div className="form-group">
                <label>Type:</label>
                <input
                  type="text"
                  name="eventType"
                  value={editEvent.eventType}
                  onChange={(e) => handleInputChange(e, true)}
                />
              </div>
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="date"
                  name="doe"
                  value={editEvent.doe}
                  onChange={(e) => handleInputChange(e, true)}
                />
              </div>
              <div className="form-group">
                <label>Start Time:</label>
                <input
                  type="time"
                  name="startTime"
                  value={editEvent.startTime}
                  onChange={(e) => handleInputChange(e, true)}
                />
              </div>
              <div className="form-group">
                <label>End Time:</label>
                <input
                  type="time"
                  name="endTime"
                  value={editEvent.endTime}
                  onChange={(e) => handleInputChange(e, true)}
                />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea
                  name="eventDesc"
                  value={editEvent.eventDesc}
                  onChange={(e) => handleInputChange(e, true)}
                />
              </div>
              <button type="button" onClick={handleUpdateEvent}>
                Update Event
              </button>
            </form>

            <hr />
          </div>
        )}
        <div>
          <div className="viewUpdateHeader">
            <img src={Logo} alt="Logo"></img>
            <h2>Add New Event</h2>
          </div>
          <form className="editContainer">
            <div className="form-group">
              <label>Event ID:</label>
              <input
                type="text"
                name="eventId"
                value={newEvent.eventId}
                onChange={(e) => handleInputChange(e, false)}
              />
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="eventName"
                value={newEvent.eventName}
                onChange={(e) => handleInputChange(e, false)}
              />
            </div>
            <div className="form-group">
              <label>Type:</label>
              <input
                type="text"
                name="eventType"
                value={newEvent.eventType}
                onChange={(e) => handleInputChange(e, false)}
              />
            </div>
            <div className="form-group">
              <label>Date:</label>
              <input
                type="date"
                name="doe"
                value={newEvent.doe}
                onChange={(e) => handleInputChange(e, false)}
              />
            </div>
            <div className="form-group">
              <label>Start Time:</label>
              <input
                type="time"
                name="startTime"
                value={newEvent.startTime}
                onChange={(e) => handleInputChange(e, false)}
              />
            </div>
            <div className="form-group">
              <label>End Time:</label>
              <input
                type="time"
                name="endTime"
                value={newEvent.endTime}
                onChange={(e) => handleInputChange(e, false)}
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                name="eventDesc"
                value={newEvent.eventDesc}
                onChange={(e) => handleInputChange(e, false)}
              />
            </div>
            <button type="button" onClick={handleAddEvent}>
              Add Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ViewUpdateEvents;
