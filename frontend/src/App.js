import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import Navbar from './components/Navbar';

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate('/login');
    }
  }, [authToken, navigate]);

  const addToCart = (product) => {
    console.log('Adding to cart:', product); // Debugging
    setCart(prevCart => [...prevCart, product]);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
    navigate('/login');
  };

  return (
    <div>
      <Navbar authToken={authToken} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            authToken ? (
              <>
                <ProductList addToCart={addToCart} />
                <Cart cart={cart} />
              </>
            ) : (
              <LoginPage setAuthToken={setAuthToken} />
            )
          }
        />
        <Route path="/login" element={<LoginPage setAuthToken={setAuthToken} />} />
        <Route path="/dashboard" element={<DashboardPage handleLogout={handleLogout} />} />
      </Routes>
    </div>
  );
}

export default App;