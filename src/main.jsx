import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router"

import {ClerkProvider} from "@clerk/react";
import {dark,shadesOfPurple} from "@clerk/ui/themes";

import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider appearance={{
          theme:shadesOfPurple,
        }}>
        <App />
      </ClerkProvider>
    </BrowserRouter>
   </StrictMode>
)
