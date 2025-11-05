import React, { useEffect } from 'react'
import Product from './Product'
import { useDispatch ,useSelector} from 'react-redux'
import { getProduts } from '../Redux/productSlice'
import StatusCode from '../utils/StatusCode'
const ProductList = () => {
  const dispatch = useDispatch()
  const {data : products,status} = useSelector(state => state.products)

      useEffect(()=>{
        dispatch(getProduts())
  },[dispatch])
  if(status === StatusCode.LOADING)
  {
    return <p className='loading__handling'>Loading....</p>
  }
     if(status === StatusCode.ERROR){
    return <p className='error__handleing'>Someting went wrong , Please try agian later !!!!</p>

     }

  return (
    <div className='productList__conainer'>

        {products.map(product=>
            (
        <Product  key={product.id} Product={product}/>

            )
)}

      


    </div>
  )
}

export default ProductList