import './SectionFinal.css'
import servicio from '../Imagenes/teamWork.png';
import {motion} from 'framer-motion';

import React from 'react';

const SectionFinal = () => {
    
    return(
        <motion.div className='container 
        seccionFinal'
        initial= {{opacity:0}}
        transition={{delay:1,duration:1}}
        animate={{opacity:1}}
        final={{opacity:0}}
        >
            <div className='contenedorTextoImg
            columns'>
                <img src={servicio} alt={servicio} 
                className="imagenServicio
                column
                " />
                
                <div className='column 
                contenedorTexto'>
                    <h2 className='tituloSecciones'>Que hacemos ?</h2>
                    <p className='textoSecciones'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati nemo provident consequatur voluptatibus!
                    Explicabo mollitia aliquid magnam blanditiis veritatis dolorem nesciunt eius nisi, sapiente architecto laborum doloremque exercitationem cupiditate corporis facilis eaque ullam iure odio voluptatum eum est. Voluptate vero qui beatae laboriosam.</p>
                    <p className='textoSecciones'>
                        Lorem ipsum dolor sit amet consectetur,quo exercitationem atque? Voluptatum error ab officiis esse perferendis quam cupiditate assumenda labore.
                    Asperiores labore sapiente voluptatem laboriosam distinctio commodi aperiam? Tempora ex quia rem qui rerum tenetur perspiciatis nulla laudantium eligendi ab magni pariatur eius earum et praesentium, aspernatur ipsum aperiam laboriosam.</p>
                    <button className='btnGral'>
                        <a href="#Formulario">Contactanos</a>
                        </button>
                    
                </div>
            </div>
            
        </motion.div>
    )
}

export { SectionFinal }