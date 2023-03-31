import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar/navbar"
import Footer from "../src/components/footer/footer"
import Contact from './pages/contact';
import Frontpage from './pages/frontpage';
import Gallery from './pages/gallery';

function App() {
  return (
    <Router>
    <div className="wrapper">
      <Navbar />

      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/home" element={<Frontpage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    <Footer></Footer>
    </div>
  </Router>    
  );
}

export default App;
