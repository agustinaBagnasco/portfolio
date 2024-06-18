import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import unas from '../img/unas.jpg'
import reserva from '../img/reserva.jpg'
import imac from '../img/imac.gif'
import gisa from '../img/gisa.png'
import secret from '../img/secret.jpg'
import agencia from '../img/agencia.jpg'
import salud from '../img/salud.jpg'
//import sudoku from '../img/sudoku.png'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <>
      <h3>Proyectos</h3>
      <Carousel data-bs-theme="dark" className='carousel'>
        <Carousel.Item className='item-carousel'>
          <img
            className="img-carousel"
            src={unas}
            alt='Logo Beatiful Nails'
          />
          <Carousel.Caption className='desc-carousel'>
            <h6>Beautiful Nails by Jime Robert</h6>
            <p>WEB React JS</p>
            <Link to='https://beautifulnails.netlify.app/' target='blank'>
              <button className='btn btn-outline-dark'>Visitar</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='item-carousel'>
          <img
            className="img-carousel"
            src={reserva}
            alt='Logo Beatiful Nails'
          />
          <Carousel.Caption className='desc-carousel'>
            <h6>Reserva Natural</h6>
            <p>WEB bootstrap</p>
            <Link to='https://reservaquetzal.netlify.app/' target='blank'>
              <button className='btn btn-outline-dark'>Visitar</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='item-carousel'>
          <img
            className="img-carousel"
            src={imac}
            alt='Logo Beatiful Nails'
          />
          <Carousel.Caption className='desc-carousel'>
            <h6>IMAC: Importacion de Asientos Contables</h6>
            <p>HTML - CSS - JS - BOOTSTRAP</p>
            <Link to='#'>
              <button className='btn btn-outline-dark'>En construccion</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='item-carousel'>
          <img
            className="img-carousel"
            src={gisa}
            alt='Logo Beatiful Nails'
          />
          <Carousel.Caption className='desc-carousel'>
            <h6>GiSa - Accesorios y bisuteria</h6>
            <p>WEB - React JS</p>
            <Link to='https://gisa.netlify.app/' target='blank'>
              <button className='btn btn-outline-dark'>Visitar</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='item-carousel'>
          <img
            className="img-carousel"
            src={secret}
            alt='Logo Beatiful Nails'
          />
          <Carousel.Caption className='desc-carousel'>
            <h6>Secret Santa - intercambio de obsequios</h6>
            <p>HTML - CSS - JS - BOOTSTRAP</p>
            <Link to='https://santasecreto.netlify.app/' target='blank'>
              <button className='btn btn-outline-dark'>Visitar</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='item-carousel'>
          <img
            className="img-carousel"
            src={agencia}
            alt='Logo Beatiful Nails'
          />
          <Carousel.Caption className='desc-carousel'>
            <h6>Agencia de Viajes</h6>
            <p>React JS - JAVA</p>
            <Link to='https://www.crystalnails.com.uy/' target='blank'>
              <button className='btn btn-outline-dark'>Visitar</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        
        <Carousel.Item className='item-carousel'>
          <img
            className="img-carousel"
            src={salud}
            alt='Logo Beatiful Nails'
          />
          <Carousel.Caption className='desc-carousel'>
            <h6>Mutualista gestion pacientes </h6>
            <p>JS - BOOTSTRAP</p>
            <Link to='https://mutualista.netlify.app/' target='blank'>
              <button className='btn btn-outline-dark'>Visitar</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        {/* <Carousel.Item className='item-carousel'>
          <img
            className="img-carousel"
            src={sudoku}
            alt='Logo Beatiful Nails'
          />
          <Carousel.Caption className='desc-carousel'>
            <h6>Sudoku</h6>
            <p>JS - BOOTSTRAP</p>
            <Link to='https://www.crystalnails.com.uy/' target='blank'>
              <button className='btn btn-outline-dark'>Visitar</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>

    </>
  );
}

export default Projects;
