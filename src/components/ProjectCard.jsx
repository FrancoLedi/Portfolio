import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import FoodAPP from '../images/FoodAPP.png';
import './ProjectCard.css';
import { Icon } from '@iconify/react';

export const ProjectCard = () => {
  return (
    <div>
    <Container className=''>
        <Row className='card d-flex flex-row justify-content-center'>
            <Col className='picture' sm={5}><img className='imagen' src={FoodAPP} alt='Imagen de FoodAPP'/></Col>
            <Col className='description d-flex flex-column justify-content-start' sm={6}>
                <h3 className='my-4'>FoodAPP</h3>
                <span className='span'>{`Este proyecto se desarrollo utilizando React.js desde el Client-Side en conjunto con Redux para el manejo de estados ademas de Node.js y Express para el back por ultimo aclarar que programe una base de datos PostgreSQL haciendo uso de Sequelize.
                La misma posee: ⊛ Paginación que muestra 9 diferentes recetas por pagina.⊛ Filtros y ordenamientos. ⊛ Paginas con información para cada receta.⊛ Búsqueda por nombre de receta o tipo de dieta (o similitudes en la búsqueda).⊛ Formulario controlado para la creación de nuevas recetas.`}</span>
            </Col>
            <Col className='d-flex flex-column justify-content-end align-items-center mb-5' sm={1}><Icon className='buttons' icon="tabler:world" color="white" width="40" height="35" inline={true} /><Icon className='buttons' icon="akar-icons:github-fill" color="white" width="40" height="35" inline={true} /></Col>
        </Row>
    </Container>
    </div>
  )
}

