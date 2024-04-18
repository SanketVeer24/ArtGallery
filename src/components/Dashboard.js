// // Dashboard.js - Component for the main dashboard
// import React from 'react';
// import Sidebar from './Sidebar';
// import Content from './Content';

// const Dashboard = () => {
//   return (
//     <div>
//       <Sidebar />
//       <Content />
//     </div>
//   );
// };

// export default Dashboard;

// Dashboard.js
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ViewCustomers from "./ViewCustomers";

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customers from the API
    setCustomers([
      // ... fetched customers
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/view-customers"
        element={<ViewCustomers customers={customers} />}
      />
    </Routes>
  );
};

export default Dashboard;
