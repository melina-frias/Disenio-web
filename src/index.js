import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { Header, Hero, Precios,ItemsServicios, Servicios, SectionFinal,Formulario,Footer, Background, BackgroundItems} from './Components/Index'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <App/>
      <Header/>
      <Hero/>
      <Precios/>
      <ChakraProvider>
        <ItemsServicios/>
      </ChakraProvider>
      <BackgroundItems/>
      <ChakraProvider>
          <Servicios/>
      </ChakraProvider>
      <Background/>
      <SectionFinal />
      <Formulario/>
      <ChakraProvider>
        <Footer/>
      </ChakraProvider>
      
      
      

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

