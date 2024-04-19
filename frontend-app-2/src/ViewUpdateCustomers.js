// import React, { useState, useEffect } from 'react';

// function ViewUpdateCustomers() {
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       // Replace with your API endpoint
//       const response = await fetch('/api/customers');
//       const data = await response.json();
//       setCustomers(data);
//     };

//     fetchCustomers();
//   }, []);

//   // Include functionality for viewing and updating customers

//   return (
//     <div>
//       {/* Map through customers to display them */}
//     </div>
//   );
// }

// export default ViewUpdateCustomers;

import React, { useState } from 'react';

function ViewUpdateCustomers() {

  const dummyData = [
    {
      customer_id: 'CUST002',
      customer_name: 'Jane Smith',
      address: '456 Elm Street, Anycity',
      email: 'janesmith@example.com',
      phone: '9876543210'
    },
    {
      customer_id: 'CUST001',
      customer_name: 'Joe Doe',
      address: '123 Main Street, Anytown',
      email: 'joedow@example.com',
      phone: '1234567890'
    }
  ];

  const [customers, setCustomers] = useState(dummyData);
  const [editCustomer, setEditCustomer] = useState(null);
  const [newCustomer, setNewCustomer] = useState({
    customer_id: '',
    customer_name: '',
    address: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e, isEdit = true) => {
    const { name, value } = e.target;
    if (isEdit) {
      setEditCustomer((prev) => ({
        ...prev,
        [name]: value
      }));
    } else {
      setNewCustomer((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleUpdateCustomer = () => {
    const updatedCustomers = customers.map((customer) =>
      customer.customer_id === editCustomer.customer_id ? editCustomer : customer
    );
    setCustomers(updatedCustomers);
    setEditCustomer(null);
  };

  const handleAddCustomer = () => {
    setCustomers([...customers, newCustomer]);
    setNewCustomer({
      customer_id: '',
      customer_name: '',
      address: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div>
      <h2>Customer List</h2>
      {customers.map((customer) => (
        <div key={customer.customer_id}>
          <p>ID: {customer.customer_id}</p>
          <p>Name: {customer.customer_name}</p>
          <p>Address: {customer.address}</p>
          <p>Email: {customer.email}</p>
          <p>Phone: {customer.phone}</p>
          <button onClick={() => setEditCustomer(customer)}>Edit</button>
        </div>
      ))}
      {editCustomer && (
        <div>
          <h2>Edit Customer</h2>
          <form>
            <input type="hidden" value={editCustomer.customer_id} />
            <label>
              Name:
              <input
                type="text"
                name="customer_name"
                value={editCustomer.customer_name}
                onChange={(e) => handleInputChange(e, true)}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={editCustomer.address}
                onChange={(e) => handleInputChange(e, true)}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={editCustomer.email}
                onChange={(e) => handleInputChange(e, true)}
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={editCustomer.phone}
                onChange={(e) => handleInputChange(e, true)}
              />
            </label>
            <button type="button" onClick={handleUpdateCustomer}>
              Update Customer
            </button>
          </form>
        </div>
      )}
      <div>
        <h2>Add New Customer</h2>
        <form>
          <label>
            ID:
            <input
              type="text"
              name="customer_id"
              value={newCustomer.customer_id}
              onChange={(e) => handleInputChange(e, false)}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              name="customer_name"
              value={newCustomer.customer_name}
              onChange={(e) => handleInputChange(e, false)}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={newCustomer.address}
              onChange={(e) => handleInputChange(e, false)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={newCustomer.email}
              onChange={(e) => handleInputChange(e, false)}
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={newCustomer.phone}
              onChange={(e) => handleInputChange(e, false)}
            />
          </label>
          <button type="button" onClick={handleAddCustomer}>
            Add Customer
          </button>
        </form>
      </div>
    </div>
  );
}

export default ViewUpdateCustomers;
