import React from "react";
import AboutMe from "./layout/about-me/AboutMe";
import Header from "./layout/header/Header";
import NavBar from "./layout/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <AboutMe/>
    </div>
  );
}

export default App;
