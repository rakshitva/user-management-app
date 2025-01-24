import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserForm from '../components/UserForm';

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data))
      .catch(() => alert('Error fetching user details'));
  }, [id]);

  return user ? <UserForm existingUser={user} /> : <p>Loading...</p>;
};

export default EditUser;
