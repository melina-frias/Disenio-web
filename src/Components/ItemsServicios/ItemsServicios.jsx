import './ItemsServicios.css'
import React from 'react';
import global from '../Imagenes/global.png';
import clipboard from '../Imagenes/clipboard.png';
import clipboardAmarillo from '../Imagenes/clipboardAmarillo.png';
import check from '../Imagenes/check.png';
import tag from '../Imagenes/tag.png';
import value from '../Imagenes/value.png';
import { VerticallyCenter } from '../VerticallyCenter/VerticallyCenter';
import { motion } from 'framer-motion';


const ItemsServicios = () => {
    const  cardItems =[
        {icono: check,
        title: 'Ahorrando su tiempo',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores numquam quam, expedita pariatur at quia necessitatibus odit cupiditate, architecto, iusto suscipit recusandae ducimus consectetur explicabo autem odio perspiciatis. Suscipit, quam.',
        id: 1,
        },
        {icono: tag,
        title: 'Siempre seguro y protegido',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores numquam quam, expedita pariatur at quia necessitatibus odit cupiditate, architecto, iusto suscipit recusandae ducimus consectetur explicabo autem odio perspiciatis. Suscipit, quam.',
        id:2,
        },

        {
        icono: clipboard,
        title: 'Relevante y preciso',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores numquam quam, expedita pariatur at quia necessitatibus odit cupiditate, architecto, iusto suscipit recusandae ducimus consectetur explicabo autem odio perspiciatis. Suscipit, quam.',
        id: 3,
        },
        
        {
        icono: value,
        title: 'Excelente valor',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores numquam quam, expedita pariatur at quia necessitatibus odit cupiditate, architecto, iusto suscipit recusandae ducimus consectetur explicabo autem odio perspiciatis. Suscipit, quam.',
        id:4,
        },

        {
        icono: global,
        title: 'un alcance global',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores numquam quam, expedita pariatur at quia necessitatibus odit cupiditate, architecto, iusto suscipit recusandae ducimus consectetur explicabo autem odio perspiciatis. Suscipit, quam.',
        id: 5,
        },

        {
        icono: clipboardAmarillo,
        title: 'resultados rápidos',
        descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores numquam quam, expedita pariatur at quia necessitatibus odit cupiditate, architecto, iusto suscipit recusandae ducimus consectetur explicabo autem odio perspiciatis. Suscipit, quam.',
        id:6,
        },
    ];  
    
    

    return(
        <motion.div id='ItemServicios'
        className='container Items'
        initial= {{opacity:0}}
        transition={{delay:1,duration:1}}
        animate={{opacity:1}}
        final={{opacity:0}}
        >
            <div className='is-flex is-justify-content-space-between
            contenedorItems'>
                {cardItems.map(item => (
                    <div key={item.id} className='boxCard'>
                        <img src={item.icono} alt={item.title} 
                        className='icono'/>
                        <h3>{item.title}</h3>
                        <p>{item.descripcion}</p>
                    </div>

                ))}
            </div>
            <VerticallyCenter/>
                
            
        </motion.div>

    )
}

export { ItemsServicios }