import React from 'react'
import cv from '../img/CV-Agustina-Bagnasco.pdf'
import { Link } from 'react-router-dom'
import Linkedin from '../assets/Linkedin.svg'
import Wpp from '../assets/Wpp.svg'
import LittleGit from '../assets/Little-Git.svg'
import Cv from '../assets/cv.svg'

function IconInfo() {
    return (
        <div className='row icon-head'>
            <Link to='https://www.linkedin.com/in/agustina-bagnasco/' className='icon' target='blank' title="Linkedin">
                <img
                    src={Linkedin}
                    alt='Logo Likedin' />
            </Link>

            <Link to='https://wa.me/59891972508?text=Hola%20quiero%20contratar%20tus%20servicios' className='icon' target='blank' title='Enviar Whatsapp'>
                <img
                    src={Wpp}
                    alt='Logo Whatsapp' />
            </Link>

            <Link to='https://github.com/agustinaBagnasco' className='icon' target='blank' title='Proyectos en Github'>
                <img
                    src={LittleGit}
                    alt='Logo Github' />
            </Link>
            <Link to={cv} download={'Agustina_Bagnasco_CV'} target='blank' className='icon' title='Descargar CV'>
                <img
                    src={Cv}
                    alt='Logo Curriculum Vitae' />
            </Link>
        </div>

    )
}

export default IconInfo