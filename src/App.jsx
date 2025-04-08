import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';
import Homepage from './components/Homepage';
import ListOfCategory from './components/ListOfCategory';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';
import Cart from './components/Cart';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<ListOfCategory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;