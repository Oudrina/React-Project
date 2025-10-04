function CartItem({qauntity,setQuantity}){
    const handleIncrease = ()=>{
       if(qauntity > 0){
        setQuantity(qauntity + 1)
       }
    
    }

    
    const handleDecrease = ()=>{
       if(qauntity > 1){
        setQuantity(qauntity - 1)
       }
    
    }
    return (
        <>
        <div className="cart-wrapper">
                <div className="image">
                <img src="/images/product6.jpg" alt="Product name" />
                </div>
                <div className="product-desc">
                <div className="header">
                    Product Name
                </div>
                <div className="price">
                    <p>$ 500</p>
                    <div className='increaseButton'>
                  <button className='increase-button'  onClick={handleDecrease}> 
                    - </button>

                  <span value={qauntity}
                   onChange={(e)=>setQuantity(e.target.value)}>{qauntity}</span>
                    <button className='reduce-button' onClick={handleIncrease}>
                        +</button>
                    </div>
                   
                      <div>
                    <button className='trash-delete'>
                        <i className='bx bx-trash'></i>
                    </button>
                </div>
                </div>
                </div>
                
            </div>
        </>
    )
}
export default CartItem