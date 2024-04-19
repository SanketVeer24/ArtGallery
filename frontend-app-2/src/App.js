import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import ViewUpdateCustomers from './ViewUpdateCustomers';
import ViewUpdateArtworks from './ViewUpdateArtworks';
import ViewUpdateEvents from './ViewUpdateEvents';
// Import any other components you may have created

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customers" element={<ViewUpdateCustomers />} />
        <Route path="/artworks" element={<ViewUpdateArtworks />} />
        <Route path="/events" element={<ViewUpdateEvents />} />
        {/* Define other routes with their respective elements as needed */}
      </Routes>
    </Router>
  );
}

export default App;


