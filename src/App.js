import 'aos/dist/aos.css'; // You can also use <link> for styles

import AOS from 'aos';
import AboutMe from "./layout/about-me/AboutMe";
import ContactForm from "./layout/contact-form/ContactForm";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import NavBar from "./layout/navbar/NavBar";
import Proyects from "./layout/proyects/Proyects";
import React from "react";

function App() {
  AOS.init();
  return (
    <div>
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Proyects/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
