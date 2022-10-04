import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './ProjectCard.css';
import { Icon } from '@iconify/react';

export const ProjectCard = (props) => {
  return (
    <>
    <Container className=''>
        <Row className='card d-flex flex-row align-items-start justify-content-center'>
            <Col className='picture d-flex align-self-center justify-self-center justify-content-center' sm={5}><img className='imagen' src={props.image} alt='Imagen de FoodAPP'/></Col>
            <Col className='description d-flex flex-column' sm={6}>
                <h3 className='mt-1 text-center'>{props.title}</h3>
                <p className='my-3'>
                  {props.paragraph}
                </p>
            </Col>
            <Col className='d-flex flex-column align-self-end mb-3' sm={1}><Icon className='buttons' icon="tabler:world" color="white" width="40" height="35" inline={true} /><Icon className='buttons' icon="akar-icons:github-fill" color="white" width="40" height="35" inline={true} /></Col>
        </Row>
    </Container>
    </>
  )
}

