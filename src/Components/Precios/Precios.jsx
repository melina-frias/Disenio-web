import './Precios.css'
import workTeam from '../Imagenes/teamWork.png';
import { motion } from 'framer-motion';
import React from 'react';

const Precios = () => {
    
      
    return(
        <motion.div id='Precios'
        className='container 
        precios'
        initial= {{opacity:0}}
        transition={{delay:1,duration:1}}
        animate={{opacity:1}}
        final={{opacity:0}}
        >
            <div className="contenedorTextoImg
            columns">
                
                <img src={workTeam} alt={workTeam} 
                className="imagenPrecio
                column is-half-desktop
                " />
                
                <div className='
                
                contenedorTexto'>
                    <h2 className='tituloSecciones'>Inteligente y asequible</h2>
                    <p className='textoSecciones'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati blanditiis cum quia placeat assumenda perspiciatis et corporis dolorem ipsum amet neque tempore voluptatem vitae nam, alias nemo provident consequatur voluptatibus!
                    Explicabo mollitia aliquid magnam blanditiis veritatis dolorem nesciunt eius nisi, sapiente architecto laborum doloremque exercitationem cupiditate corporis facilis eaque ullam iure.</p> 
                    <p className='textoSecciones'>
                        Voluptatum error ab officiis esse perferendis quam cupiditate assumenda labore.
                    Asperiores labore sapiente voluptatem laboriosam distinctio commodi aperiam? Tempora ex quia rem qui rerum tenetur perspiciatis nulla laudantium eligendi ab magni pariatur eius earum et praesentium, aspernatur ipsum aperiam laboriosam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias enim illo esse nulla laboriosam voluptates, accusamus quas perferendis harum ea distinctio, sapiente nisi fuga modi commodi tempore error dolorem?</p>
                    <button className='btnGral'>
                        <a href="#ItemServicios">Explora más</a>
                    </button>
                    
                    
                </div>
            </div>
        </motion.div>
    )
}

export { Precios }