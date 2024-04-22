import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

function Dashboard() {
  return (
    <div id="adminDashboard">
      <div id="navbar" className="sidenav">
        <div className="sidenavContainer">
          <div className="sidenavContent">
            <img src={Logo} alt="Logo"></img>
            <h1>artfuly</h1>
          </div>
        </div>
        <div>
          <Link to="/login">
            <button className="logout-button">Logout ➡️</button>
          </Link>
        </div>
      </div>
      <div id="mainContent">
        <h1>Admin Dashboard</h1>
        <nav>
          <ul className="adminCardsList">
            <li className="adminCard">
              <Link to="/viewupdateevents">View/Update Events</Link>
            </li>
            <li className="adminCard">
              <Link to="/viewupdatecollection">View/Update Collection</Link>
            </li>
            <li className="adminCard">
              <Link to="/viewcustomers">View Customer Data</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Dashboard;
