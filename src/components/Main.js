import React from 'react';
import Projects from './Projects';
import Aboutme from './About-me';
import Tecnologies from './Tecnologies';
import Header from './Header';


function Main() {
    return (
        <div className='container'>
            <Header/>
            <div className="justify-content-md-center contenedor">
                <Projects />
                <Tecnologies />
                <Aboutme />
            </div>
        </div>
    )
}

export default Main