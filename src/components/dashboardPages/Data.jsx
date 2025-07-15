import React, { useEffect, useState } from "react";
import "./data.css";
const Data = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState(new Set());
  const [department, setDepartment] = useState(new Set());
  const [selectCity, setSelectedCity] = useState("");
  const [deptName, setDeptName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(" https://dummyjson.com/users");
        const data = await response.json();
        setData(data.users);
        setCity(data.users.company?.address?.city);
        console.log(city);

        //Unique city name
        const citySet = new Set(
          data.users.map((user) => user.company.address.city)
        );

        //Unique department name
        const departmentSet = new Set(
          data.users.map((deptName) => deptName.company.department)
        );

        setCity(citySet);
        setDepartment(departmentSet);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
  }, []);

  const clearFilters = () => {
    setSelectedCity("");
    setDeptName("");
    setAge("");
  };

  return (
    <>
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
                  <select
                    className="filter-select"
                    id="countryFilter"
                    onChange={(e) => setSelectedCity(e.target.value)}
                    value={selectCity}
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
                    id="departmentFilter"
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
                    id="ageFilter"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                  >
                    <option value="">All Ages</option>
                    <option value="20-29">20-29 years</option>
                    <option value="30-39">30-39 years</option>
                    <option value="40-49">40-49 years</option>
                    <option value="50+">50+ years</option>
                  </select>

                  <button
                    className="clear-filters"
                    id="clearFilters"
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>

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
                  {data &&
                    data
                      .filter((user) => {
                        const cityMatch =
                          selectCity === "" ||
                          user.company?.address?.city === selectCity;
                        const departmentMatch =
                          deptName === "" ||
                          user.company?.department === deptName;
                        const ageMatch = () => {
                          if (age === "") return true;
                          if (age === "20-29")
                            return user.age >= 20 && user.age <= 29;
                          if (age === "30-39")
                            return user.age >= 30 && user.age <= 39;
                          if (age === "40-49")
                            return user.age >= 40 && user.age <= 49;
                          if (age === "50") return user.age >= 50;
                          return false;
                        };
                        return cityMatch && departmentMatch && ageMatch();
                      })
                      .map((user) => (
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

                          <td>
                            <span className="country-flag">
                              {user.company.address.city}
                            </span>
                          </td>
                          <td>{user.age}</td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
