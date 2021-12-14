import React from "react";
import AboutMe from "./layout/about-me/AboutMe";
import ContactForm from "./layout/contact-form/ContactForm";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import NavBar from "./layout/navbar/NavBar";
import Proyects from "./layout/proyects/Proyects";

function App() {
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
