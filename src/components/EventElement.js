import React from "react";
import { Link } from "react-router-dom";

function EventElements(props) {
  return (
    <div className="eventElementContainer">
      <div className="eventDateCard">
        {props.event_month}
        <br />
        {props.event_date}
      </div>
      <div className="eventDetailCard">
        <div>
          <h3 className="eventName">{props.event_name}</h3>
          <p className="eventDesc">{props.event_desc}</p>
        </div>

        <div className="eventRegisterBtnDiv">
          <Link
            to={{ pathname: "/eventRegisterForm", state: "Hello World" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="eventRegisterBtn">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventElements;
