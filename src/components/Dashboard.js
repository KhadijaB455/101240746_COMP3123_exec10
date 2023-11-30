


import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
  
    dispatch(logout());
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', maxWidth: '300px', margin: 'auto' }}>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
