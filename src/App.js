import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar/navbar"
import Footer from "../src/components/footer/footer"
import Contact from './pages/contact';
import Frontpage from './pages/frontpage';
import Gallery from './pages/gallery';
import AboveFooter from './components/aboveFooter/aboveFooter';
import NavEx from './components/navEx/navEx';
import Logo from './components/logo/logo';


function App() {
  return (
    <Router>
    <div className='app'>
      <Logo/>
      <Navbar />
      <NavEx />

      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/home" element={<Frontpage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <AboveFooter/>
    <Footer></Footer>
    </div>
  </Router>    
  );
}

export default App;
