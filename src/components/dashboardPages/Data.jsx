import React, { useEffect, useState } from "react";
import "./data.css";

const Data = () => {
  const usersPerPage = 8;
  const [data, setData] = useState(null);
  const [city, setCity] = useState(new Set());
  const [userName, setUserName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [department, setDepartment] = useState(new Set());
  const [selectCity, setSelectedCity] = useState("");
  const [deptName, setDeptName] = useState("");
  const [age, setAge] = useState("");
  const [viewMode, setViewMode] = useState("table");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setData(data.users);

        const citySet = new Set(
          data.users.map((user) => user.company.address.city)
        );
        const departmentSet = new Set(
          data.users.map((user) => user.company.department)
        );

        setCity(citySet);
        setDepartment(departmentSet);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
  }, []);

  const getFilteredUsers = () => {
    return (
      data?.filter((user) => {
        const cityMatch =
          selectCity === "" || user.company?.address?.city === selectCity;
        const departmentMatch =
          deptName === "" || user.company?.department === deptName;
        const ageMatch = () => {
          if (age === "") return true;
          if (age === "20-29") return user.age >= 20 && user.age <= 29;
          if (age === "30-39") return user.age >= 30 && user.age <= 39;
          if (age === "40-49") return user.age >= 40 && user.age <= 49;
          if (age === "50+") return user.age >= 50;
          return false;
        };
        const nameMatch =
          userName === "" ||
          `${user.firstName} ${user.lastName}`
            .toLowerCase()
            .includes(userName.toLowerCase());
        return cityMatch && departmentMatch && ageMatch() && nameMatch;
      }) || []
    );
  };

  const filteredUsers = getFilteredUsers().slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  const clearFilters = () => {
    setSelectedCity("");
    setDeptName("");
    setAge("");
    setUserName("");
    setCurrentPage(1);
  };

  return (
    <div className="container-2">
      <div className="main-content-2">
        <div className="content">
          <div className="page-header">
            <h1 className="page-title">Dashboard</h1>
            <p className="page-subtitle">
              Welcome back! Here's what's happening with your users.
            </p>
          </div>

          <div className="table-container">
            <div className="table-header">
              <h2 className="table-title">User Management</h2>
              <div className="filters">
                <div className="view-toggle">
                  <button
                    className={viewMode === "table" ? "active" : ""}
                    onClick={() => setViewMode("table")}
                  >
                    List View
                  </button>
                  <button
                    className={viewMode === "grid" ? "active" : ""}
                    onClick={() => setViewMode("grid")}
                  >
                    Grid View
                  </button>
                </div>

                <select
                  className="filter-select"
                  value={selectCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">All Cities</option>
                  {[...city].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <select
                  className="filter-select"
                  value={deptName}
                  onChange={(e) => setDeptName(e.target.value)}
                >
                  <option value="">All Department</option>
                  {[...department].map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>

                <select
                  className="filter-select"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                >
                  <option value="">All Ages</option>
                  <option value="20-29">20-29 years</option>
                  <option value="30-39">30-39 years</option>
                  <option value="40-49">40-49 years</option>
                  <option value="50+">50+ years</option>
                </select>

                <div className="search-container">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search By Name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <button className="clear-filters" onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>
            </div>

            {viewMode === "table" ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Department</th>
                    <th>City</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <div className="user-info">
                          <div className="user-avatar">
                            {user.firstName[0]} {user.lastName[0]}
                          </div>
                          <span className="user-name">
                            {user.firstName} {user.lastName}
                          </span>
                        </div>
                      </td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.company.department}</td>
                      <td>{user.company.address.city}</td>
                      <td>{user.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="grid-view">
                {filteredUsers.map((user) => (
                  <div key={user.id} className="grid-card">
                    <p>
                      <strong>
                        {user.firstName} {user.lastName}
                      </strong>
                    </p>
                    <p>✉️ Email: {user.email}</p>
                    <p>📞 Phone: {user.phone}</p>
                    <p>🏢 Department: {user.company.department}</p>
                    <p>📍 City: {user.company.address.city}</p>
                    <p>🎂 Age: {user.age}</p>
                  </div>
                ))}
              </div>
            )}

            {getFilteredUsers().length > usersPerPage && (
              <div className="pagination">
                {Array.from({
                  length: Math.ceil(getFilteredUsers().length / usersPerPage),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={currentPage === index + 1 ? "active" : ""}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
