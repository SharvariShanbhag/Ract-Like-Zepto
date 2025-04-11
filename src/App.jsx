import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import MainNavbar from './components/MainNavbar';
import Homepage from './components/Homepage';
import CategoriesPage from './components/CategoriesPage';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';
import Cart from './components/Cart';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <MainNavbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;