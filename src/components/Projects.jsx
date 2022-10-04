import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <>
    <Container fluid className='projects'>
        <h1 className='title text-center'>Projects</h1>
        <Col >
            <Row >
              
                <ProjectCard />
              
            </Row>
            <Row >
              
                <ProjectCard />
              
            </Row>
        </Col>
    </Container>
    </>
  )
}

