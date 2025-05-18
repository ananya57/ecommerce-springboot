import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ handleLogout }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => navigate('/')}>Go to Products</button>
    </div>
  );
};

export default Dashboard;