import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './TechSkills.css';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

export const TechSkills = () => {

  const language = useSelector(state => state.language);

  return (
    <>
    <Container fluid className='techSkills d-flex justify-content-center flex-column text-center' id='skills'>
    <h1>{language ? 'Habilidades Técnicas' : 'Tech Skills'}</h1>
    <Row className= 'd-flex flex-row mt-3'>
        <Col xxl={3}  xl={3}  lg={3}  md={3}  sm={6}  xs={6} className='text-center d-flex flex-column align-items-center col'>
            
            <span className='d-flex flex-column'><Icon icon="logos:html-5" width="110" height="100" />HTML</span>
            <span className='d-flex flex-column'><Icon icon="logos:bootstrap" width="110" height="100" />Bootstrap</span>
            <span className='d-flex flex-column'> <Icon icon="logos:javascript" width="110" height="100" />Javascript</span>
            <span className='d-flex flex-column'> <Icon icon="vscode-icons:file-type-postcss" width="110" height="100" />PostCSS</span>
        </Col>
        <Col xxl={3}  xl={3}  lg={3}  md={3}  sm={6}  xs={6} className='text-center d-flex flex-column align-items-center col'>
            <span className='d-flex flex-column'> <Icon icon="logos:css-3" width="110" height="100" />CSS</span>
            <span className='d-flex flex-column'> <Icon icon="logos:nodejs" width="110" height="100" />Node</span>
            <span className='d-flex flex-column'> <Icon icon="logos:sequelize" width="110" height="100" />Sequelize</span>
            <span className='d-flex flex-column'> <Icon icon="simple-icons:railway" width="110" height="100" />Railway</span>
        </Col>
        <Col xxl={3}  xl={3}  lg={3}  md={3}  sm={6}  xs={6} className='text-center d-flex flex-column align-items-center col'>
            <span className='d-flex flex-column'> <Icon icon="logos:postgresql" width="110" height="100" />Postgresql</span>
            <span className='d-flex flex-column'> <Icon icon="logos:figma" width="110" height="100" />Figma</span>
            <span className='d-flex flex-column'> <Icon icon="logos:typescript-icon" width="110" height="100" />Typescript</span>
            <span className='d-flex flex-column'> <Icon icon="logos:git" width="110" height="100" />Git</span>
        </Col>
        <Col xxl={3}  xl={3}  lg={3}  md={3}  sm={6}  xs={6} className='text-center d-flex flex-column align-items-center col'>
            <span className='d-flex flex-column'><Icon icon="logos:redux" width="110" height="100" />Redux</span>
            <span className='d-flex flex-column'><Icon icon="logos:firebase" width="110" height="100" />Firebase</span>
            <span className='d-flex flex-column'><Icon icon="logos:express" width="110" height="100" />Express</span>
            <span className='d-flex flex-column'><Icon icon="vscode-icons:file-type-reactts" width="110" height="100" />React</span>
        </Col>
      </Row>
    </Container>
    </>
  )
}

