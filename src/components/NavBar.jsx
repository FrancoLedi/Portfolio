import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import { Icon } from '@iconify/react';
import './navBar.css'
export const NavBar = () => {

    //const [activeLink, setActiveLink] = useState('home');
    //const [srolled, setScrolled] = useState(false);


    //const onUpdateActiveLink = (value) =>{
    //    setActiveLink(value);
    //}

    return(
        <>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="d-flex flex-row" >
          <Nav.Link href='https://github.com/FrancoLedi/FrancoLedi' ><Icon className="mx-2 icons" icon="logos:github-icon" inline={true} /></Nav.Link>
          <Nav.Link href='https://www.linkedin.com/in/francoledesma/' ><Icon className="icons" icon="cib:linkedin" color="black" inline={true} /></Nav.Link>
          </Navbar.Brand>
          <Nav className="justify-content-end nav">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link className="mx-4">Tech Skills</Nav.Link>
            <Nav.Link >Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    )
}