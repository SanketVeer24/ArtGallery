import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/customers">View/Update Customers</Link></li>
          <li><Link to="/events">View/Update Events</Link></li>
          <li><Link to="/artworks">View/Update Artworks</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;

