import React from 'react';
import './Hero.css'
import HeroImg from '../Imagenes/Hero.png';
import waves from '../Imagenes/waves.png';
import { motion } from 'framer-motion';



const Hero = () => {
    return (
        <div className="imgFondo">
            <div id='Inicio'
                className='container heroContenedor'
            >
                <div className="columns
                contenedorTextoImgHero"
                >
                    <motion.div className='column 
                    textoPrincipal'
                        initial={{ x: '100vw' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'tween', duration: 1.5 }}
                    >
                        <h1 className='titulo'>Crea tu <img src={waves} alt="" className='waveHero' />
                            negocio de éxito</h1>
                        <p className='subtitulo'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, maiores similique, quis quos architecto tempore vitae fuga laboriosam qui id .</p>
                        <button className='btnGral'>
                            <a href="#Precios">Empezar</a>
                        </button>
                    </motion.div>

                    <img src={HeroImg} alt={HeroImg}
                        className='column 
                        imagen'
                    />
                </div>

                <div className='columns is-full-tablet contenedorBtn'>
                    <h3 className='text'>Charlemos</h3>
                    <a href="#Formulario">
                        <span className='material-symbols-outlined btnChat'>forum</span>
                    </a>

                </div>
            </div>
        </div>
    )
}

export { Hero }