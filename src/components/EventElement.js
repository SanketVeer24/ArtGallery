import React from "react";
import { Link } from "react-router-dom";

function EventElements(props) {
  return (
    <div className="eventElementContainer">
      <div className="eventDateCard">
        {props.eventMonth}
        <br />
        {props.eventDate}
      </div>
      <div className="eventDetailCard">
        <div>
          <h3 className="eventName">{props.eventName}</h3>
          <p className="eventDesc">{props.eventDesc}</p>
        </div>

        <div className="eventRegisterBtnDiv">
          <Link
            to="/eventRegisterForm"
            state={{ id: props.eventId, name: props.eventName }}
          >
            <button className="eventRegisterBtn">Book Tickets</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventElements;
