

import './App.css'
import Cart from './Component/Cart'
import CartList from './Component/CartList'
import Navbar from './Component/Navbar'
import ProductList from './Component/ProductList'
import { Route, Routes } from 'react-router-dom'


function App() {
 


  

  return (
   <div>
    <Navbar />
   
   <Routes>
    <Route  path='/' element={ <ProductList />}/>
    <Route path='/cart' element={<CartList />} />
   </Routes>

   </div>
  )
}

export default App
