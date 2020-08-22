import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'


function PortNav() {
  return (
<Navbar expand="lg">
        <Navbar.Brand href="#home">Benjamin Huntley</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">About</Link>
            <Link to="/Portfolio/">Portfolio</Link>
            <Nav.Link href="https://github.com/b7t7h7" target="_blank">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/benjamin-huntley-ba628a1a9/" target="_blank">LinkedIn</Nav.Link>
            <Nav.Link href="/public/assets/Ben_Huntley_Resume.docx" target="_blank">Resume</Nav.Link>
            {/* <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" /> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

  export default PortNav;
