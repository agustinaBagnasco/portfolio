import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import unas from '../img/unas.jpg'
import reserva from '../img/reserva.jpg'
import imac from '../img/imac.gif'
import gisa from '../img/gisa.png'
import secret from '../img/secret.jpg'
import agencia from '../img/agencia.jpg'
import salud from '../img/salud.jpg'
import sudoku from '../img/sudoku.png'
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
            <h5>Beautiful Nails by Jime Robert</h5>
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
            <h5>Reserva Natural</h5>
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
            <h5>IMAC: Importacion de Asientos Contables</h5>
            <p>HTML - CSS - JS - BOOTSTRAP</p>
            <Link to='https://www.crystalnails.com.uy/' target='blank'>
              <button className='btn btn-outline-dark'>Visitar</button>
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
            <h5>GiSa - Accesorios y bisuteria</h5>
            <p>WEB - React JS</p>
            <Link to='https://www.crystalnails.com.uy/' target='blank'>
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
            <h5>Secret Santa - intercambio de obsequios</h5>
            <p>HTML - CSS - JS - BOOTSTRAP</p>
            <Link to='https://secretsantaaa.netlify.app/' target='blank'>
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
            <h5>Agencia de Viajes</h5>
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
            <h5>Mutualista gestion pacientes </h5>
            <p>JS - BOOTSTRAP</p>
            <Link to='https://mutualista.netlify.app/' target='blank'>
              <button className='btn btn-outline-dark'>Visitar</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='item-carousel'>
          <img
            className="img-carousel"
            src={sudoku}
            alt='Logo Beatiful Nails'
          />
          <Carousel.Caption className='desc-carousel'>
            <h5>Sudoku</h5>
            <p>JS - BOOTSTRAP</p>
            <Link to='https://www.crystalnails.com.uy/' target='blank'>
              <button className='btn btn-outline-dark'>Visitar</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>
  );
}

export default Projects;
