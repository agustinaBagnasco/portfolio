import React from "react"
import Html from '../assets/Html.svg'
import Css from '../assets/Css.svg'
import Js from '../assets/Javascript.svg'
import Bootstrap from '../assets/Bootstrap.svg'
import Rjs from '../assets/React.svg'
import Github from '../assets/Github.svg'



function Tecnologies() {
    return (
        <>
            <h3>Tecnologías</h3>
            <div className="tecno">
                <img
                    src={Html}
                    alt="Logo Html"
                />
                <img
                    src={Css}
                    alt="Logo Css"
                />
                <img
                    src={Js}
                    alt="Logo Javascript"
                />
                <img
                    src={Rjs}
                    alt="Logo React"
                />
                   <img
                    src={Bootstrap}
                    alt="Logo Bootstrap"
                />
                <img
                    src={Github}
                    alt="Logo Github"
                />
            </div>
        </>
    );

}
export default Tecnologies;
