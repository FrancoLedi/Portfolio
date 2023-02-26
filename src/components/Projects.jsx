import React from 'react';
import { Container, Row, Col, Card, } from 'react-bootstrap';
import './Projects.css';
import HenryGames from '../images/HenryGames.png';
import HenryHardware from '../images/HenryHardware.jpg';
import { useSelector } from 'react-redux';

export const Projects = () => {

  const language = useSelector(state => state.language);


  return (
    <>
    <Container fluid className='projects Container' id='project'>
        <h1 className='title text-center'>{language ? 'Proyectos' : 'Projects'}</h1>
        <Row xs={1} sm={1} md={1} lg={2} className="g-4 Row">
      
        <Col className='Column'>
          <div className='Card'>
            <div className='ImageContainer'>
              <a href='https://videogames-vert.vercel.app/'><img className='Image' src={HenryGames}/></a>
            </div>
            <div className='Content'>
              <h4 className='Title'> Videogames SPA </h4>
              {language ? 
              
                <span className='Description'>

                <br></br>
                ⊛ Paginación que muestra 15 videojuegos diferentes por página.<br></br> 
                ⊛ Filtrado y ordenamiento<br></br> 
                ⊛ Páginas con información de cada juego.<br></br> 
                ⊛ Busca por nombre de videojuego o género (o similitudes en la búsqueda).<br></br> 
                ⊛ Formulario controlado para la creación de nuevos videojuegos.

              </span>
              :
                <span className='Description'>

                <br></br>
                ⊛ Pagination that shows 15 different videogames per page.<br></br>
                ⊛ Filters and sorts.<br></br> 
                ⊛ Pages with information for each game.<br></br> 
                ⊛ Search by videogame name or genre (or similarities in the search).<br></br> 
                ⊛ Controlled form for the creation of new videogames.

              </span>
              }
            </div>
          </div>
          
        </Col>

        <Col className='Column'>
          <div className='Card'>
              <div className='ImageContainer'>
                <a href='https://proyecto-grupal-componentes-3zjq7qgo7-wizzaisha.vercel.app/'><img className='Image' src={HenryHardware}/></a>
              </div>
              <div className='Content'>
                <h4 className='Title'> E-commerce </h4>
                {language ?
                <span className='Description'>

                <br></br>
              Cuenta con pagos con tarjetas de crédito o débito con posibilidad de especificar la dirección de envío, visualización de productos por páginas con ordenamiento,
                filtrado y búsqueda por nombre, registro e inicio de sesión por parte de los usuarios, carrito de compras almacenado en LocalStorage y también puedes preguntar
                al administrador sobre cualquier producto.
                <br></br>
                <br></br>
              También dispone de un apartado accesible por el administrador de la página desde el que se pueden gestionar los productos (crear, editar o eliminar), 
                convertir a otros usuarios en administradores, ver estadísticas de los artículos más vendidos, estado de compra y resolver dudas de los clientes.
                </span>
                :
                <span className='Description'>

                  <br></br>
                  It has payments with credit or debit cards with the possibility of specifying the shipping address, display of products by pages with sorting, filtering,
                   and search by name, registration and login by users, shopping cart stored in LocalStorage and also you can ask the administrator about any product.
                  <br></br>
                  <br></br>
                  It also has a section accessible by the administrator of the page from which you can manage the products (create, edit or delete), convert other users into administrators,
                   see statistics of best-selling items, purchase status and answer customer questions.
                  </span>
                }
              </div>
            </div>

        </Col>
      
    </Row>
        
    </Container>
    </>
  )
}
