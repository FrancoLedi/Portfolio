import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { switchLanguage } from "../redux/Actions";
import { Icon } from '@iconify/react';
import './navBar.css';


export const NavBar = () => {

  const dispatch = useDispatch();

  const language = useSelector(state => state.language);

  const screenWidth = window.matchMedia('(max-width: 768px)');

  const handleClick = () => {
    dispatch(switchLanguage())
  }

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleClose = () => setMenuOpen(false)


  if(screenWidth.matches){
    // Version movil 
    return(
      <>
      <Navbar expand='md' collapseOnSelect>
      <Container>
      <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" onClick={toggleMenu}/>
      <Navbar.Offcanvas
            id='offcanvasNavbar-expand-md'
            aria-labelledby='offcanvasNavbarLabel-expand-md'
            placement="start"
            restoreFocus={false}
            show={menuOpen}
            onHide={handleClose}
          >
        <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand-md' className='d-flex flex-direction-row'>
                Franco Ledesma 
                <Nav.Link href='https://github.com/FrancoLedi/FrancoLedi' ><Icon className="mx-2 icons" icon="logos:github-icon" inline={true} /></Nav.Link>
                <Nav.Link href='https://www.linkedin.com/in/francoledesma/' ><Icon className="icons" icon="cib:linkedin" color="black" inline={true} /></Nav.Link>
                <Nav.Link className="mx-2" ><Icon onClick={() => handleClick()} className={language ? '' : "language"} icon="uil:english-to-chinese" inline={true} color={language ? 'black' : 'white'}/></Nav.Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
          <Offcanvas.Body className="justify-content-center">
        <Nav className="nav">
          <Nav.Link href='#message' className="mx-2" onClick={toggleMenu} >{language ? 'Contacto' : 'Contact' }</Nav.Link>
          <Nav.Link href='#skills' className="mx-2" onClick={toggleMenu} >{language ? 'Habilidades Técnicas' : 'Tech Skills' }</Nav.Link>
          <Nav.Link href='#project' className="mx-2" onClick={toggleMenu} >{language ? 'Proyectos' : 'Projects'}</Nav.Link>
        </Nav>
        </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
    )}

else {
  // Version de escritorio
  return(
    <>
      <Navbar expand='md'>
      <Container>
      <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md"  />
      <Navbar.Offcanvas
            id='offcanvasNavbar-expand-md'
            aria-labelledby='offcanvasNavbarLabel-expand-md'
            placement="start"
          >
        <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand-md' className='d-flex flex-direction-row'>
                Franco Ledesma 
                <Nav.Link href='https://github.com/FrancoLedi/FrancoLedi' ><Icon className="mx-2 icons" icon="logos:github-icon" inline={true} /></Nav.Link>
                <Nav.Link href='https://www.linkedin.com/in/francoledesma/' ><Icon className="icons" icon="cib:linkedin" color="black" inline={true} /></Nav.Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
          <Offcanvas.Body className="justify-content-center">
        <Nav className="nav">
          <Nav.Link href='#message' className="mx-2" >{language ? 'Contacto' : 'Contact' }</Nav.Link>
          <Nav.Link href='#skills' className="mx-2" >{language ? 'Habilidades Técnicas' : 'Tech Skills' }</Nav.Link>
          <Nav.Link href='#project' className="mx-2" >{language ? 'Proyectos' : 'Projects'}</Nav.Link>
          <Nav.Link href='https://github.com/FrancoLedi/FrancoLedi' ><Icon className="icons" icon="logos:github-icon" inline={true} /></Nav.Link>
          <Nav.Link href='https://www.linkedin.com/in/francoledesma/' ><Icon className="icons" icon="cib:linkedin" color="black" inline={true} /></Nav.Link>
          <Nav.Link className="mx-2" ><Icon onClick={() => handleClick()} className={language ? '' : "language"} icon="uil:english-to-chinese" inline={true} color={language ? 'black' : 'white'}/></Nav.Link>
        </Nav>
        </Offcanvas.Body>
          </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
)}
}
