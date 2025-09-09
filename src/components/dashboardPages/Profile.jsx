import React, { useState, useEffect, useRef } from "react";
import "./profile.css";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { firstName, lastName, emailId, logOut, updateName } = useAuth();
  const { darkMode, toggleTheme } = useTheme();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const toggleProfile = () => {
    setProfileOpen(!profileOpen);
  };

  const toggleSlider = () => {
    setSidebarOpen(!sidebarOpen);
  }


  const editProfile = () => {
    if (firstNameRef.current && lastNameRef.current) {
      const updatedFirstName = firstNameRef.current.value.trim();
      const updatedLastName = lastNameRef.current.value.trim();
      updateName(updatedFirstName, updatedLastName);
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    }
  };

  console.log(firstName, lastName, emailId);

  return (
    <div className="container-2">
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/dashboard" className="active">
              <svg className="nav-icon" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
              </svg>
              Dashboard
            </NavLink>
          </li>
        </ul>

        <div className="profile-container">
          <div className="profile-box" onClick={toggleProfile}>
            {firstName?.charAt(0) || "A"}
            {lastName?.charAt(0) || "D"}
            <div className="profile-details">
              <div className="profile-username">
                {firstName || "User"} {lastName || ""}
              </div>
              <div className="profile-email">{emailId || "user@example.com"}</div>
            </div>
          </div>
          {profileOpen && (
            <div className="profile-submenu">
              {isEditing ? (
                <div className="edit-fields">
                  <input
                    type="text"
                    defaultValue={firstName}
                    ref={firstNameRef}
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    defaultValue={lastName}
                    ref={lastNameRef}
                    placeholder="Last name"
                  />
                  <button onClick={editProfile}>Save</button>
                  <button onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
              ) : (
                <>
                  <button className="edit-btn" onClick={() => setIsEditing(true)}>
                    Edit
                  </button>
                  <button className="logout-btn" onClick={logOut}>
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>


      <div className="main-content-2">
        <div className="top-nav">
          <button className="hamburger" onClick={toggleSlider}>☰</button>
          <div className="search-container"></div>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 1021 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;