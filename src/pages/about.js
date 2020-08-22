import React, { Component } from "react";
import PortNav from '../components/Navbar';
import Face from '../components/Face';
import About from '../components/About';
import Quote from '../components/Quote';
import Footer from '../components/Footer';

class AboutPg extends Component {

  render() {
    return (
      <div className="App parallax">
        <PortNav/>
        <Face/>
        <span id="about"></span>
        <About/>
        <Quote/>
        <Footer/>
      </div>
    );
  }
}
  
export default AboutPg;
