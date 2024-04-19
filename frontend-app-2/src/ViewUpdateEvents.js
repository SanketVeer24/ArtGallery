// import React, { useState, useEffect } from 'react';

// function ViewUpdateEvents() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Replace with your API endpoint
//     const fetchEvents = async () => {
//       const response = await fetch('/api/events');
//       const data = await response.json();
//       setEvents(data);
//     };

//     fetchEvents().catch(console.error);
//   }, []);

//   // Include functionality for viewing and updating events

//   return (
//     <div>
//       {/* Map through events to display them */}
//       {events.map((event) => (
//         <div key={event.id}>
//           {/* Display event details */}
//           <p>{event.name}</p>
//           {/* ...other details */}
//           {/* Update button or form */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ViewUpdateEvents;

// import React, { useState } from 'react';

// function ViewUpdateEvents() {

//   const dummyData = [
//     {
//       event_id: 'EVT001',
//       event_name: 'Art Exhibition',
//       event_type: 'Exhibition',
//       doe: '2024-05-10',
//       start_time: '09:00:00',
//       end_time: '18:00:00',
//       event_desc: 'An exhibition showcasing various artworks from renowned artists.'
//     },
//     {
//       event_id: 'EVT002',
//       event_name: 'Oil Painting Exhibition',
//       event_type: 'Exhibition',
//       doe: '2024-06-15',
//       start_time: '14:00:00',
//       end_time: '16:00:00',
//       event_desc: 'An exhibition of oil painting techniques.'
//     }
//   ];

//   const [events, setEvents] = useState(dummyData);
//   const [editEvent, setEditEvent] = useState(null);
//   const [newEvent, setNewEvent] = useState({
//     event_id: '',
//     event_name: '',
//     event_type: '',
//     doe: '',
//     start_time: '',
//     end_time: '',
//     event_desc: ''
//   });

//   const handleInputChange = (e, isEdit = true) => {
//     const { name, value } = e.target;
//     if (isEdit) {
//       setEditEvent((prev) => ({
//         ...prev,
//         [name]: value
//       }));
//     } else {
//       setNewEvent((prev) => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };

//   const handleUpdateEvent = () => {
//     const updatedEvents = events.map((event) =>
//       event.event_id === editEvent.event_id ? editEvent : event
//     );
//     setEvents(updatedEvents);
//     setEditEvent(null);
//   };

//   const handleAddEvent = () => {
//     setEvents([...events, newEvent]);
//     setNewEvent({
//       event_id: '',
//       event_name: '',
//       event_type: '',
//       doe: '',
//       start_time: '',
//       end_time: '',
//       event_desc: ''
//     });
//   };

//   return (
//     <div>
//       <h2>Event List</h2>
//       {events.map((event) => (
//         <div key={event.event_id}>
//           <p>ID: {event.event_id}</p>
//           <p>Name: {event.event_name}</p>
//           <p>Type: {event.event_type}</p>
//           <p>Date: {event.doe}</p>
//           <p>Start Time: {event.start_time}</p>
//           <p>End Time: {event.end_time}</p>
//           <p>Description: {event.event_desc}</p>
//           <button onClick={() => setEditEvent(event)}>Edit</button>
//         </div>
//       ))}
//       {editEvent && (
//         <div>
//           <h2>Edit Event</h2>
//           <form>
//             <input type="hidden" value={editEvent.event_id} />
//             <label>
//               Name:
//               <input
//                 type="text"
//                 name="event_name"
//                 value={editEvent.event_name}
//                 onChange={(e) => handleInputChange(e, true)}
//               />
//             </label>
//             <label>
//               Type:
//               <input
//                 type="text"
//                 name="event_type"
//                 value={editEvent.event_type}
//                 onChange={(e) => handleInputChange(e, true)}
//               />
//             </label>
//             <label>
//               Date:
//               <input
//                 type="date"
//                 name="doe"
//                 value={editEvent.doe}
//                 onChange={(e) => handleInputChange(e, true)}
//               />
//             </label>
//             <label>
//               Start Time:
//               <input
//                 type="time"
//                 name="start_time"
//                 value={editEvent.start_time}
//                 onChange={(e) => handleInputChange(e, true)}
//               />
//             </label>
//             <label>
//               End Time:
//               <input
//                 type="time"
//                 name="end_time"
//                 value={editEvent.end_time}
//                 onChange={(e) => handleInputChange(e, true)}
//               />
//             </label>
//             <label>
//               Description:
//               <textarea
//                 name="event_desc"
//                 value={editEvent.event_desc}
//                 onChange={(e) => handleInputChange(e, true)}
//               />
//             </label>
//             <button type="button" onClick={handleUpdateEvent}>
//               Update Event
//             </button>
//           </form>
//         </div>
//       )}
//       <div>
//         <h2>Add New Event</h2>
//         <form>
//           <label>
//             ID:
//             <input
//               type="text"
//               name="event_id"
//               value={newEvent.event_id}
//               onChange={(e) => handleInputChange(e, false)}
//             />
//           </label>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="event_name"
//               value={newEvent.event_name}
//               onChange={(e) => handleInputChange(e, false)}
//             />
//           </label>
//           <label>
//             Type:
//             <input
//               type="text"
//               name="event_type"
//               value={newEvent.event_type}
//               onChange={(e) => handleInputChange(e, false)}
//             />
//           </label>
//           <label>
//             Date:
//             <input
//               type="date"
//               name="doe"
//               value={newEvent.doe}
//               onChange={(e) => handleInputChange(e, false)}
//             />
//           </label>
//           <label>
//             Start Time:
//             <input
//               type="time"
//               name="start_time"
//               value={newEvent.start_time}
//               onChange={(e) => handleInputChange(e, false)}
//             />
//           </label>
//           <label>
//             End Time:
//             <input
//               type="time"
//               name="end_time"
//               value={newEvent.end_time}
//               onChange={(e) => handleInputChange(e, false)}
//             />
//           </label>
//           <label>
//             Description:
//             <textarea
//               name="event_desc"
//               value={newEvent.event_desc}
//               onChange={(e) => handleInputChange(e, false)}
//             />
//           </label>
//           <button type="button" onClick={handleAddEvent}>
//             Add Event
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ViewUpdateEvents;


import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment); // Setup the localizer by providing moment

function ViewUpdateEvents() {
  const dummyData = [
    {
      event_id: 'EVT001',
      event_name: 'Art Exhibition',
      event_type: 'Exhibition',
      doe: '2024-05-10',
      start_time: '09:00:00',
      end_time: '18:00:00',
      event_desc: 'An exhibition showcasing various artworks from renowned artists.'
    },
    {
      event_id: 'EVT002',
      event_name: 'Oil Painting Exhibition',
      event_type: 'Exhibition',
      doe: '2024-06-15',
      start_time: '14:00:00',
      end_time: '16:00:00',
      event_desc: 'An exhibition of oil painting techniques.'
    }
  ];

  const [events, setEvents] = useState(dummyData.map(event => ({
    ...event,
    start: new Date(event.doe + 'T' + event.start_time),
    end: new Date(event.doe + 'T' + event.end_time),
    title: event.event_name
  })));
  const [editEvent, setEditEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    event_id: '',
    event_name: '',
    event_type: '',
    doe: '',
    start_time: '',
    end_time: '',
    event_desc: ''
  });

  const handleInputChange = (e, isEdit = true) => {
    const { name, value } = e.target;
    if (isEdit) {
      setEditEvent((prev) => ({
        ...prev,
        [name]: value
      }));
    } else {
      setNewEvent((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleUpdateEvent = () => {
    const updatedEvents = events.map((event) =>
      event.event_id === editEvent.event_id ? { ...event, ...editEvent } : event
    );
    setEvents(updatedEvents);
    setEditEvent(null);
  };

  const handleAddEvent = () => {
    const newEventToAdd = {
      ...newEvent,
      start: new Date(newEvent.doe + 'T' + newEvent.start_time),
      end: new Date(newEvent.doe + 'T' + newEvent.end_time),
      title: newEvent.event_name
    };
    setEvents([...events, newEventToAdd]);
    setNewEvent({
      event_id: '',
      event_name: '',
      event_type: '',
      doe: '',
      start_time: '',
      end_time: '',
      event_desc: ''
    });
  };

  return (
    <div>
      <h2>Event List and Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '20px 0' }}
      />
      {events.map((event) => (
        <div key={event.event_id}>
          <p>ID: {event.event_id}</p>
          <p>Name: {event.event_name}</p>
          <p>Type: {event.event_type}</p>
          <p>Date: {event.doe}</p>
          <p>Start Time: {event.start_time}</p>
          <p>End Time: {event.end_time}</p>
          <p>Description: {event.event_desc}</p>
          <button onClick={() => setEditEvent(event)}>Edit</button>
        </div>
      ))}
      {editEvent && (
        <div>
          <h2>Edit Event</h2>
          <form>
            <input type="hidden" value={editEvent.event_id} />
            <label>
              Name:
              <input
                type="text"
                name="event_name"
                value={editEvent.event_name}
                onChange={(e) => handleInputChange(e, true)}
              />
            </label>
            <label>
              Type:
              <input
                type="text"
                name="event_type"
                value={editEvent.event_type}
                onChange={(e) => handleInputChange(e, true)}
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="doe"
                value={editEvent.doe}
                onChange={(e) => handleInputChange(e, true)}
              />
            </label>
            <label>
              Start Time:
              <input
                type="time"
                name="start_time"
                value={editEvent.start_time}
                onChange={(e) => handleInputChange(e, true)}
              />
            </label>
            <label>
              End Time:
              <input
                type="time"
                name="end_time"
                value={editEvent.end_time}
                onChange={(e) => handleInputChange(e, true)}
              />
            </label>
            <label>
              Description:
              <textarea
                name="event_desc"
                value={editEvent.event_desc}
                onChange={(e) => handleInputChange(e, true)}
              />
            </label>
            <button type="button" onClick={handleUpdateEvent}>
              Update Event
            </button>
          </form>
        </div>
      )}
      <div>
        <h2>Add New Event</h2>
        <form>
          <label>
            ID:
            <input
              type="text"
              name="event_id"
              value={newEvent.event_id}
              onChange={(e) => handleInputChange(e, false)}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="event_name"
              value={newEvent.event_name}
              onChange={(e) => handleInputChange(e, false)}
            />
          </label>
          <label>
            Type:
            <input
              type="text"
              name="event_type"
              value={newEvent.event_type}
              onChange={(e) => handleInputChange(e, false)}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="doe"
              value={newEvent.doe}
              onChange={(e) => handleInputChange(e, false)}
            />
          </label>
          <label>
              Start Time:
              <input
                type="time"
                name="start_time"
                value={newEvent.start_time}
                onChange={(e) => handleInputChange(e, false)}
              />
            </label>
            <label>
              End Time:
              <input
                type="time"
                name="end_time"
                value={newEvent.end_time}
                onChange={(e) => handleInputChange(e, false)}
              />
            </label>
            <label>
              Description:
              <textarea
                name="event_desc"
                value={newEvent.event_desc}
                onChange={(e) => handleInputChange(e, false)}
              />
            </label>
            <button type="button" onClick={handleAddEvent}>
              Add Event
            </button>
        </form>
      </div>
    </div>
  );
}

export default ViewUpdateEvents;
