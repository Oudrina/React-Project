import Header from './components/Header'
import './App.css'
import {Route, Routes} from 'react-router'
import Products from './pages/Products'
import { useState } from 'react'
import Carts from './pages/Cart'
import AddProduct from './pages/AddProduct'
import ViewProduct from './pages/ViewProduct'

function App() {
const [products ,setProducts] = useState([])
    const[count,setCount] = useState(1)



  return (
    <>
     <Header count={count}   />
      <Carts  />

     

      <Routes>
        <Route path='/' element ={<Products products={products} setProducts={setProducts} />} />
        <Route path='/product' element={<AddProduct />} />
        <Route path='/view/:id'  element={<ViewProduct count={count} setCount={setCount}/>}/>
        

       
      </Routes>
    </>
  )
}

export default App
