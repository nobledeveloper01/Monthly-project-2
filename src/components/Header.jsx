import React, { useState, useEffect } from "react";
import { NavLink, Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "./Home";
import Task from "./Task";
import Register from "./Register";
import Login from "./Login";
import Switch from "./Switch";
import myImage from "../images/task_manager_logo.png";


export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [themeLight, setThemeLight] = useState(true);

  const themeClass = themeLight ? "light" : "dark";

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const ProtectedRoute = ({ path, element }) => {
    return isLoggedIn ? element : <Navigate to="/login" />;
  };

  return (
    <div>
      <div className={`wrapper ${themeClass}`}>
        <header className="header">
          <div className="container">
            <nav className="navBar">
              <div className="navBar-wrapper">
                <div class="img-logo">
                  <img src={myImage} alt="logo" />
                </div>
                <NavLink exact to="/" className="link" activeClassName="active-link" >
                  Home
                </NavLink>
                <NavLink to="/task" className="link" activeClassName="active-link">
                  Task
                </NavLink>
                <NavLink to="/register" className="link" activeClassName="active-link">
                  Register
                </NavLink>
                <div className="button-container">
                  {isLoggedIn ? (
                    <button onClick={handleLogout} className="btn">
                      Logout
                    </button>
                  ) : (
                    <NavLink to="/login" className="btn">
                      Login
                    </NavLink>
                  )}
                  
                </div>
                <Switch
                    themeLight={themeLight}
                    setThemeLight={setThemeLight}
                  />
              </div>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
            }
          />
          <Route
            path="/task"
            element={<ProtectedRoute path="/task" element={<Task />} />}
          />
          
          <Route
            path="*"
            element={
              <h1>
                Not Found, go back home <Link to="/">Home</Link>
              </h1>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

