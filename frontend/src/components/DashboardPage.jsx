import React from 'react';
import './DashboardPage.css';

const DashboardPage = ({ handleLogout }) => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>Welcome to SHOPEASE</h2>
        <p>You're logged in!</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default DashboardPage;