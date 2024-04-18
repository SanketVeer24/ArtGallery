import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ViewCustomers from "./components/ViewCustomers";
import EventRegister from "./components/EventRegister";
import Events from "./components/Events";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/view-customers" element={<ViewCustomers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventRegisterForm" element={<EventRegister />} />
          {/* Redirect to homepage by default */}
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
