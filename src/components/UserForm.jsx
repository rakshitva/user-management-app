import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", user)
      .then((response) => {
        console.log("User added:", response.data);
        alert("User added successfully!");
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  return (
    <div className="container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" className="form-control my-2" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" className="form-control my-2" onChange={handleChange} />
        <input type="text" name="department" placeholder="Department" className="form-control my-2" onChange={handleChange} />
        <button type="submit" className="btn btn-primary">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
