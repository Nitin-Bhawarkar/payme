import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import Services from './components/Services';
import Error from './components/Error';
import Navbar from './components/Navbar';
import About from './components/AboutUs';
import Footer from './components/Footer';

const App = () => {
  return (
    <>


<BrowserRouter>
<Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
    
  )
}

export default App