import React from 'react';
import { Container, Row, Col, Card, } from 'react-bootstrap';
import './Projects.css';
import FoodAPP from '../images/FoodAPP.png';
import HenryHardware from '../images/HenryHardware.jpg';
import { useSelector } from 'react-redux';

export const Projects = () => {

  const language = useSelector(state => state.language);

  return (
    <>
    <Container fluid className='projects' id='project'>
        <h1 className='title text-center'>{language ? 'Proyectos' : 'Projects'}</h1>
        <Row xs={1} md={2} className="g-4">
      
        <Col>
          <Card className="bg-dark text-white">
            <a href='https://food-portfolio.vercel.app/'><Card.Img variant="top" src={FoodAPP} className='img-fluid' /></a>
            <Card.Body>
              <Card.Title>SPA Foods</Card.Title>

              {language ? <Card.Text>
              <br></br>
                ⊛ Paginación que muestra 9 recetas diferentes por página.<br></br> 
                ⊛ Filtrado y ordenamiento<br></br> 
                ⊛ Páginas con información de cada receta.<br></br> 
                ⊛ Busca por nombre de receta o tipo de dieta (o similitudes en la búsqueda).<br></br> 
                ⊛ Formulario controlado para la creación de nuevas recetas.
              </Card.Text>
               :
              <Card.Text>
              <br></br>
                ⊛ Pagination that shows 9 different recipes per page.<br></br>
                ⊛ Filters and sorts.<br></br> 
                ⊛ Pages with information for each recipe.<br></br> 
                ⊛ Search by recipe name or type of diet (or similarities in the search).<br></br> 
                ⊛ Controlled form for the creation of new recipes.
              </Card.Text>
              }
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="bg-dark text-white">
          <a href= 'https://proyecto-grupal-componentes-3zjq7qgo7-wizzaisha.vercel.app/'> <Card.Img variant="top" src={HenryHardware} /></a>
            <Card.Body>
              <Card.Title>E-commerce</Card.Title>
              {language ?
                <Card.Text>
              <br></br>
Cuenta con pagos con tarjetas de crédito o débito con posibilidad de especificar la dirección de envío, visualización de productos por páginas con ordenamiento, filtrado y búsqueda por nombre, registro e inicio de sesión por parte de los usuarios, carrito de compras almacenado en LocalStorage y también puedes preguntar al administrador sobre cualquier producto.<br></br><br></br>
También dispone de un apartado accesible por el administrador de la página desde el que se pueden gestionar los productos (crear, editar o eliminar), convertir a otros usuarios en administradores, ver estadísticas de los artículos más vendidos, estado de compra y resolver dudas de los clientes.
              </Card.Text>
              :
              <Card.Text>
              <br></br>
              It has payments with credit or debit cards with the possibility of specifying the shipping address, display of products by pages with sorting, filtering, and search by name, registration and login by users, shopping cart stored in LocalStorage and also you can ask the administrator about any product.<br></br><br></br>
It also has a section accessible by the administrator of the page from which you can manage the products (create, edit or delete), convert other users into administrators, see statistics of best-selling items, purchase status and answer customer questions.
              </Card.Text>
              }
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
        
    </Container>
    </>
  )
}
