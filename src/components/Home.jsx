import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import Traje2 from '../images/Traje2.jpg'
import './Home.css'
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { useSelector } from 'react-redux';

export const Home = () => {

  const language = useSelector(state => state.language);

  return (
    <>
    <Router>
    <Container className='home'>
        <Row >
            <Col  className="justify-content-center d-flex align-items-center" xxl={6}  xl={6}  lg={6}  md={12}  sm={12}  xs={{span: 12, order: 'last'}} >
                <Row className='align-items-center justify-content-evenly'>
                    <Row className='my-2'>
                        <div>
                          <h1 className='text-center title' >{language ? 'Hola, soy Franco' : 'Hi, I am Franco'}</h1>
                          <h5 className='text-center subtitle'>{language ? 'Desarrollador Web Fullstack' : 'Fullstack Web Developer'}</h5>
                        </div>
                    </Row>
                    <Row className='my-2'>
                        <p className='text-center paragraph'>{language ? 'Alto nivel en desarrollo web enfocado en tecnologías como React, Redux, Node, PostgreSQL, Typescript, PostCSS entre otras... y excelentes competencias en comunicación, inteligencia emocional y razonamiento lógico para garantizar un trabajo de calidad.' : 'High level of web development focused on technologies such as React, Redux, Node, PostgreSQL, Typescript, PostCSS, among others... and excellent skills in communication, emotional intelligence and logical thinking to guarantee quality work..'}</p>
                    </Row>
                    <Row xs='auto' className='align-items-center justify-content-center my-2' >
                    <HashLink className='text-decoration-none' to='#message'>
                      <button className='button2'>
                      {language ? 'Enviame un mensaje' : `Let's Talk` } <Icon icon="dashicons:email-alt" color="black" width="25" height="25" inline={true} />
                      </button>
                      </HashLink>

                      <Link className='text-decoration-none' to={language ? "CVEspañol.pdf" : "CVInglés.pdf"} target="_blank" download>
                        <button className='button mx-2'>
                          {language ? 'Descargar CV' : 'Download CV'} <Icon icon="fa-solid:file-download" color="black" width="20" height="20" inline={true} /> 
                        </button>
                      </Link>

                    </Row>
                </Row>
            </Col>
            <Col  className="justify-content-center d-flex" xxl={6}  xl={6}  lg={6}  md={12}  sm={12}  xs={{span: 12, order: 'first'}} ><div className='divImg'><img className='img' src= {Traje2} alt='Imagen' /></div></Col>
        </Row>
    </Container>
    </Router>
    </>
  )
}

