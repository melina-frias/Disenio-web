import React from 'react';
import Lorem from 'react-lorem-ipsum';
import {Button,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure} from '@chakra-ui/react';


function VerticallyCenter() {
    const { isOpen, onOpen, onClose } = useDisclosure()


  
    return (
      <>
        <button onClick={onOpen} className='btnGral'>conseguir prueba gratuita</button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Prueba Gratuita</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Lorem count={2} />
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Cerrar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export {VerticallyCenter}
 
  

