import './Servicios.css'
import serviciosImg from '../Imagenes/Servicios.png';
import circle from '../Imagenes/circle.png';
import React, { } from 'react';
import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'


const Servicios = () => {
    const ServiceItems = [
        {
            title: 'Servicios de entrada de datos',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.',
            id: 1,
        },
        {
            title: 'Entrada de datos de pdf a excel',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.',
            id: 2,
        },
        {
            title: 'Entrada de datos de productos de bigcommerce',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.',
            id: 3,
        },

        {
            title: 'Servicios de entrada de datos de marketing digital',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.',
            id: 4,
        },

        {
            title: 'Limpiezas de bases de datos',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.',
            id: 5,
        },

        {
            title: 'Raspado de datos web',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat.',
            id: 6,
        },
    ];
    return (
        <motion.div className="ContenedorServicios"
            initial={{ opacity: 0 }}
            transition={{ delay: 1, duration: 1 }}
            animate={{ opacity: 1 }}
            final={{ opacity: 0 }}
        >
            <div id='Servicios'
                className='container
            servicios'>
                <h2 className='tituloSecciones'>Amplia gama de servicios</h2>
                <p className='parrafoServicios'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a, <br /> architecto voluptatum aut magnam eaque ex. </p>

                <div className="columns 
                    contenedorAcordeonImg">
                    <Accordion allowToggle
                        className='column acordeon'>
                        {ServiceItems.map(service => (

                            <AccordionItem bg={'#fff'} mb={1}
                                key={service.id}>
                                <h2>
                                    <AccordionButton _expanded={{ bg: '#3d3d3c', color: '#e8edea' }}>
                                        <Box as="span" flex='1' textAlign='left' py={2} alignItems='center'>
                                            <img src={circle} alt="" className='circle' />{service.title}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={8} pt={5} pr={7} fontSize={14}>
                                    {service.descripcion}
                                </AccordionPanel>
                            </AccordionItem>
                        ))}

                    </Accordion>

                    <img src={serviciosImg} alt={serviciosImg} className='imgServicio
                        column 
                        is-6-desktop'/>
                </div>



            </div>
        </motion.div>
    )
}

export { Servicios }