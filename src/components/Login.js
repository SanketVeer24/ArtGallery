// Login.js - Component for the login functionality
import React from 'react';

const Login = () => {
  return (
    <div>
      <form>
        {/* Form fields for login */}
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;