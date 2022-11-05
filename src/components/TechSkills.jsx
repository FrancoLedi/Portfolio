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
            <Icon icon="logos:html-5" width="110" height="100" />
            <Icon icon="logos:bootstrap" width="110" height="100" />
            <Icon icon="logos:javascript" width="110" height="100" />
            <Icon icon="logos:sass" width="110" height="100" />
        </Col>
        <Col xxl={3}  xl={3}  lg={3}  md={3}  sm={6}  xs={6} className='text-center d-flex flex-column align-items-center col'>
            <Icon icon="logos:css-3" width="110" height="100" />
            <Icon icon="logos:nodejs" width="110" height="100" />
            <Icon icon="logos:sequelize" width="110" height="100" />
            <Icon icon="logos:heroku-icon" width="110" height="100" />
        </Col>
        <Col xxl={3}  xl={3}  lg={3}  md={3}  sm={6}  xs={6} className='text-center d-flex flex-column align-items-center col'>
            <Icon icon="logos:postgresql" width="110" height="100" />
            <Icon icon="logos:figma" width="110" height="100" />
            <Icon icon="logos:typescript-icon" width="110" height="100" />
            <Icon icon="logos:git" width="110" height="100" />
        </Col>
        <Col xxl={3}  xl={3}  lg={3}  md={3}  sm={6}  xs={6} className='text-center d-flex flex-column align-items-center col'>
            <Icon icon="logos:redux" width="110" height="100" />
            <Icon icon="logos:firebase" width="110" height="100" />
            <Icon icon="logos:express" width="110" height="100" />
            <Icon icon="vscode-icons:file-type-reactts" width="110" height="100" />
        </Col>
      </Row>
    </Container>
    </>
  )
}

