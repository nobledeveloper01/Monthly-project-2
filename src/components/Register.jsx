import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("pls fill all fields");
      return;
    }
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find((user) => user.username === username);
    if (user) {
      setError("user already exist");
      return;
    }

    const newUser = {
      username,
      password,
    };

    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));
    navigate("/login");
  };

  return (
    <div className="registration-container">
  <div className="registration-forms">
    <div className="registration-input-field">
      <form onSubmit={handleRegister} className="registration-form-container">
        <h2 className="registration-form-title">Register</h2>
        <input
          className="registration-form-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="registration-form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="registration-form-error">{error}</p>}
        <div className="registration-form-button-container">
          <button className="registration-form-button" type="submit">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>

  
  );
}