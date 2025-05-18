import React from 'react';
import ReactDOM from 'react-dom/client'; // Using React 18's new root API
import './index.css'; // Optional, if you have any global styles
import App from './App'; // Import the App component
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router

// Use React 18's root API to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>  {/* Wrap the App component in Router */}
    <App />
  </Router>
);