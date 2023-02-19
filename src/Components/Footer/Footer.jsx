import './Footer.css'
import logo from '../Imagenes/logo.png'
import React from 'react';
import Lorem from 'react-lorem-ipsum';
import {Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure} from '@chakra-ui/react';

const Footer = () => {
    const {
        isOpen: isOpenTerminos,
        onOpen: onOpenTerminos,
        onClose: onCloseTerminos,
      } = useDisclosure();
    
      const {
        isOpen: isOpenPolitica,
        onOpen: onOpenPolitica,
        onClose: onClosePolitica,
      } = useDisclosure();

    return(
        <div className='footer'>
            <div className="container">
                <div className='columns is-flex is-justify-content-space-between
                logoNav'>
                    <div className="column">
                        <img src={logo} alt="logo" className='logoFooter' />
                    </div>
                    <nav className='navbar 
                    column  is-5-desktop
                    is-flex is-justify-content-space-between'>
                        <a href="#Inicio">Inicio</a>
                        <a href="#ItemServicios">Procesos de negocio</a>
                        <a href="#Servicios">Servicios</a>
                        <a href="#Formulario">Contactanos</a>                
                    </nav>
                </div>
                
                <div className='columns infoEmpresa'>
                    <p className='column'>2022 DH.B.Tech Todos los derechos resevados.</p>
                    
                    <div>
                        <button onClick={onOpenTerminos} className='terminos'>Términos y condiciones</button>
  
                        <Modal onClose={onCloseTerminos} isOpen={isOpenTerminos} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Términos y condiciones </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                            <Lorem count={2} />
                            </ModalBody>
                            <ModalFooter>
                            <Button onClick={onCloseTerminos}>Cerrar</Button>
                            </ModalFooter>
                        </ModalContent>
                        </Modal>   

                        <button onClick={onOpenPolitica} className='privacidad'>Politica de privacidad</button>
  
                        <Modal onClose={onClosePolitica} isOpen={isOpenPolitica} isCentered>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Politica de privacidad </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                            <Lorem count={2} />
                            </ModalBody>
                            <ModalFooter>
                            <Button onClick={onClosePolitica}>Cerrar</Button>
                            </ModalFooter>
                        </ModalContent>
                        </Modal>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Footer }