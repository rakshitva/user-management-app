import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = () => {
    axios.post("https://jsonplaceholder.typicode.com/users", newUser)
      .then(response => {
        setUsers([...users, response.data]);
        setNewUser({ firstName: "", lastName: "", email: "", department: "" });
      })
      .catch(error => console.error("Error adding user:", error));
  };

  const handleDeleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error("Error deleting user:", error));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Management App</h1>
      <div className="mb-3">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="form-control"
          value={newUser.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="form-control mt-2"
          value={newUser.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mt-2"
          value={newUser.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          className="form-control mt-2"
          value={newUser.department}
          onChange={handleChange}
        />
        <button className="btn btn-primary mt-3" onClick={handleAddUser}>
          Add User
        </button>
      </div>
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            {user.name} ({user.email})
            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
