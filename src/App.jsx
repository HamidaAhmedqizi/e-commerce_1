
import {  Route, Routes } from 'react-router-dom';

import './App.css'
import Home from './Pages/Home/home'
import ProductDetails from './Pages/ProductDetails/productDetails'
import Header from './Components/Header';
import Slidebar from './Components/Slidebar';
import Footer from './Components/Footer';

function App() {


  return (
  <div>

    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>

      
    </Routes>
    <Slidebar/>
    <Footer/>
 
  </div>
  )
}

export default App
