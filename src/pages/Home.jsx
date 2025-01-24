import React from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";

const Home = () => {
  return (
    <div>
      <h1 className="text-center my-4">User Management App</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default Home;
