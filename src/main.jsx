import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { PortafolioApp } from './PortafolioApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <PortafolioApp />
    </ChakraProvider>
  </StrictMode>,
)
