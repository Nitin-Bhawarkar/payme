import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import HowItWorks from '../HowItWorks'
import AboutUs from './AboutUs';
import Services from './Services';
import Contact from './Contact';



const Home = () => {
  return (
    <>
      <Header/>
      <HowItWorks/>
      <AboutUs/>
      <Services/>
      <Contact/>

  </>
  )
}

export default Home