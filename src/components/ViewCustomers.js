// ViewCustomers.js

import { Link } from "react-router-dom";

const ViewCustomers = ({ customers }) => {
  // This would be replaced with actual API call to fetch customers
  //   const [customers, setCustomers] = useState([]);

  //   useEffect(() => {
  //     // Fetch customers from API
  //     setCustomers([
  //       { id: 1, name: 'John Doe', email: 'john@example.com' },
  //       { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  //       // ...more customers
  //     ]);
  //   }, []);

  return (
    <div>
      <h1>Customers</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>
                <Link to={`/edit-customer/${customer.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewCustomers;
