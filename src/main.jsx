import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './Contexts/ProductContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import SlidebarProvider from './Contexts/SlidebarContext.jsx'
import CartProvider from './Contexts/CartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <SlidebarProvider>
    <CartProvider>
    <ProductProvider>
    
    <App />
 
  </ProductProvider>
    
    </CartProvider>
  
  </SlidebarProvider>
  
  </BrowserRouter>
 
)
