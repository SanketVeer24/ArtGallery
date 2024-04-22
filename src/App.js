import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import EventRegister from "./components/EventRegister";
import Events from "./components/Events";
import ViewUpdateEvents from "./components/ViewUpdateEvents";
import ViewUpdateCollection from "./components/ViewUpdateCollection";
import ViewCustomers from "./components/ViewCustomers";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/eventRegisterForm" element={<EventRegister />} />
          <Route path="/viewupdateevents" element={<ViewUpdateEvents />} />
          <Route
            path="/viewupdatecollection"
            element={<ViewUpdateCollection />}
          />
          <Route path="/viewcustomers" element={<ViewCustomers />} />
          {/* Redirect to homepage by default */}
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
