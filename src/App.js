import React from "react";
import AboutMe from "./layout/about-me/AboutMe";
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
    </div>
  );
}

export default App;
