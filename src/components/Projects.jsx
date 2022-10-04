import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';
import { ProjectCard } from './ProjectCard';
import FoodAPP from '../images/FoodAPP.png';
import HenryHardware from '../images/HenryHardware.jpg';

export const Projects = () => {
  return (
    <>
    <Container fluid className='projects'>
        <h1 className='title text-center'>Projects</h1>
        <Row className=''>
            <Col className='col-md-12' >
              
                <ProjectCard title='FoodAPP' image={FoodAPP} paragraph='Este proyecto se desarrollo utilizando React.js desde el Client-Side en conjunto con Redux para el manejo de estados ademas de Node.js y Express para el back por ultimo aclarar que programe una base de datos PostgreSQL haciendo uso de Sequelize.'/>
              
            </Col>
            <Col className='col-md-12 '>
              
            <ProjectCard title='HenryHardware' image={HenryHardware} paragraph='Este proyecto es un e-commerce que desarrolle en un equipo con otros 5 desarrrolladores haciendo uso de metodologias agiles (SCRUM)'/>
              
            </Col>
        </Row>
    </Container>
    </>
  )
}

