import React, { useState, useEffect } from "react";
import Logo from "../images/logo.png";
import Navbar from "./Navbar";
import axios from "axios";

function ViewCustomers() {
  const [customerData, setCustomerData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await axios.get("http://localhost:8081/api/artwork");
        const response = await axios.get(
          "https://662056403bf790e070af94e0.mockapi.io/eventregister"
        );
        setCustomerData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Navbar page="admin"></Navbar>
      <div id="viewUpdateContainer" className="viewCustomerContainer">
        <div className="updateSections">
          <div className="viewUpdateHeader">
            <img src={Logo} alt="Logo"></img>
            <h2>View Customer Details</h2>
          </div>

          <table id="editTable">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Customer Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {customerData.map((customer) => (
                <tr>
                  <td>{customer.eventId}</td>
                  <td>{customer.customerName}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.email}</td>
                  <td>{customer.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewCustomers;
