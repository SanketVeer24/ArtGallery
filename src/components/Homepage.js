import React from "react";
import Navbar from "./Navbar";
import SectionNav from "./Sectionnav";
import Footer from "./Footer";
import Cover from "../images/cover.png";

function Homepage() {
  return (
    <div className="Homepage">
      <Navbar></Navbar>
      <img id="topCover" src={Cover} alt="Cover"></img>
      <SectionNav></SectionNav>
      <Footer></Footer>
    </div>
  );
}

export default Homepage;
