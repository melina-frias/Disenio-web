import './Formulario.css'
import phone from '../Imagenes/phone.png'
import pin from '../Imagenes/pin.png'
import email from '../Imagenes/email.png'
import { motion } from 'framer-motion'

import React from 'react';

const Formulario = () => {
    const InfoContacto = [
        {
            icono: phone,
            title: 'Ponerse en contacto',
            subtitle: '(96) 6587265',
            id: 1,
        },
        {
            icono: email,
            title: 'Email',
            subtitle: 'Hola@studio.co',
            id: 2,
        },
        {
            icono: pin,
            title: 'Mapa de calle',
            subtitle: 'Khulna bangledesh.9000',
            id: 3,
        },
    ];
    return (
        <motion.div id='Formulario'
            className='container 
        seccionForm'
            initial={{ opacity: 0 }}
            transition={{ delay: 1, duration: 1 }}
            animate={{ opacity: 1 }}
            final={{ opacity: 0 }}
        >
            <div className='columns contenedorForm'>
                <div className="column">
                    <h2 className='tituloForm'>Ponerse en contacto</h2>

                    {InfoContacto.map(dato => (
                        <div key={dato.id}
                            className='contenedorInfo is-flex'>
                            <img src={dato.icono} alt={dato.title} />
                            <div className='datos'>
                                <h3>{dato.title}</h3>
                                <p>{dato.subtitle}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="column
                formulario">
                    <form action="https://formspree.io/f/xdovgazz"
                        method="POST">
                        <h2 className='tituloForm'>Hable con nosotros</h2>
                        <label>Nombre completo</label>
                        <input type="text" name='nombre'
                            placeholder='Ingrese su nombre' />

                        <label>Su compañia</label>
                        <input type="text" name='compañia'
                            placeholder='Ingrese el nombre de su compañia' />

                        <label>Su dirección de correo electrónico</label>
                        <input type="email" name="email" id="correo"
                            placeholder='Ingrese su dirección de correo electrónico ' />

                        <label>Mensaje</label>
                        <textarea name="message" id="mensaje" className='textarea'
                            placeholder='Escriba su mensaje'></textarea>

                        <button type="submit" className='btnGral'>Mensaje enviado</button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export { Formulario }