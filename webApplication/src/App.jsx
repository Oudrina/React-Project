import Header from './components/Header'
import './App.css'
import {Route, Routes} from 'react-router'
import Products from './pages/Products'
import { useEffect, useState } from 'react'
import Carts from './pages/Cart'
import AddProduct from './pages/AddProduct'
import ViewProduct from './pages/ViewProduct'
import axios from 'axios'

function App() {
const [products ,setProducts] = useState([])
    const [carts, setCarts] = useState([])



 useEffect(()=>{
     const getCart = async() => {
     const response = await axios.get('http://localhost:8080/cart')
     console.log(response.data);
     setCarts(response.data)
       
      }
     getCart()
     
    },[])
  return (
    <>
     <Header carts={carts}/>
      <Routes>
        <Route path='/' element ={<Products products={products} setProducts={setProducts}   />}/>
        <Route path='/product' element={<AddProduct />}/>
        <Route path='/view/:id'  element={<ViewProduct  />}/>
        <Route  path='/cart' element={<Carts   carts={carts} setCarts={setCarts}/>}/>
      </Routes>
    </>
  )
}

export default App
