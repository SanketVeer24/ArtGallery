import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      navigate("/dashboard");
    } else {
      alert("Incorrect Credentails.");
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div id="adminLoginContainer">
        <form
          onSubmit={handleLogin}
          id="adminLoginForm"
          className="adminLoginForm"
        >
          <h1 className="loginFromHeader">Login</h1>
          <fieldset>
            <label for="username">Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </fieldset>
          <button className="loginBtn">Login</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Login;
