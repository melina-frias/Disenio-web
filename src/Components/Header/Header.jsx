import './Header.css'
import React, { useState } from 'react';
import { Hamburguesa } from '../Hamburguesa/Hamburguesa';
import logo from '../Imagenes/logo.png';
import { motion } from 'framer-motion';


const Header = () => {
    const [click, setClick] = useState(false);
    const [bgMenu ,setBgMenu] =useState(false);


    const handleClick = () =>{
        setClick(!click)
    }

    
    const cambiarBg = () =>{
        
        if(window.scrollY >= 60){
            setBgMenu(true)
        }else{
            setBgMenu(false)
        }
    }
    window.addEventListener('scroll',cambiarBg);
    

    return(
        <header className={bgMenu ? ' headerBg' : 'headerContainer'}>
            <motion.div className='container 
            is-flex is-justify-content-space-between
            header'
            initial={{x:'100vw'}}
            animate={{x:0}}
            transition={{type:'tween',duration:1.5}}
            >
            
                <a href="#Inicio" className='logoHeader'><img src={logo} alt="logo"/></a>

                <div className='HamburBtn'>
                    <Hamburguesa click={click} handleClick={handleClick}/>
                </div>
                
                <nav className={click ? 'menuNav active' : 'menuNav'} >
                    <a onClick={(handleClick)} href="#Inicio">Inicio</a>
                    <a onClick={(handleClick)} href="#Servicios">Servicios</a>
                    <a onClick={(handleClick)} href="#Precios">Precios</a>
                    <a onClick={(handleClick)} href="#Formulario">Ayuda</a>              
                </nav>
                
                <a href="#Formulario" className='Btn'>Contactanos</a>
                    
                
                
            </motion.div>
        </header>
    )
}

export { Header }