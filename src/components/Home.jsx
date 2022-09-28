import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import profile from '../images/profile.png'
import './Home.css'

export const Home = () => {
  return (
    <>
    <Container>
        <Row >
            <Col className="justify-content-md-center d-flex align-items-center" xs={6} >
                <Row className='align-items-center justify-content-evenly'>
                    <Row className='my-2'>
                        <div>
                          <h1 className='text-center title' >Hi, I am Franco</h1>
                          <h5 className='text-center subtitle'>Fullstack Web Developer</h5>
                        </div>
                    </Row>
                    <Row className='my-2'>
                        <p className='text-center paragraph'>High level on web development and excellent soft skills ensures a quality work.</p>
                    </Row>
                    <Row xs='auto' className='align-items-center justify-content-center my-2' >
                      <button className='button2'>
                        Let's Talk <Icon icon="dashicons:email-alt" color="black" width="25" height="25" inline={true} />
                      </button>
                      <button className='button mx-2'>
                        Download CV <Icon icon="fa-solid:file-download" color="black" width="20" height="20" inline={true} /> 
                      </button>
                    </Row>
                </Row>
            </Col>
            <Col className="justify-content-md-center d-flex" xs={6} ><img width={350} src= {profile} alt='Imagen' /></Col>
        </Row>
    </Container>
    </>
  )
}

