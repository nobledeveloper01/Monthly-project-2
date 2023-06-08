import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async(e) => {
    e.preventDefault();

    if (!username || !password ) {
        setError("pls fill all fields");
        return;

    }
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user =existingUsers.find((user) => user.username === username );
    if (!user) {
        setError("user not exist");
        return;
    }
    if (user.password !== password){
        setError("Username or password is incorrect");
        return;
    
    }
    onLogin(user);
    navigate("/");
};

  return (
    <div className="login-container">
  <div className="login-forms">
    <div className="login-input-field">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-title">Login</h2>
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="login-error">{error}</p>}
        <div className="login-button-container">
          <button className="login-button" type="submit">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>

  );
}
