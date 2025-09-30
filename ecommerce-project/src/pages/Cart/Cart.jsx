import  './Cart.css'

export function Cart({cart }){
  
  
    return(
        <>

        <div className="checkout-page" >

         <div className="cartItem-wrapper">

            {cart.cartItems && cart.cartItems.length > 0 ? (
              cart.cartItems.map((cartitem) => (
                <div className='product-check-page' key={cartitem.id}>
                  <img src="images/product6.jpg" alt="" />

                  <div className="product-checkout-detail">
                    <div className="product-description-name">
                      <a href="http://" target="_blank" rel="noopener noreferrer">
                        {cartitem.product.name}
                      </a>
                    </div>
                   
                    <div className="price-quantits">
                      <span className='product-prices'> 
                        Price:{cartitem.product.price}</span>
                    </div>

                    <div className="quantity-number" type="text" name="quantity" id="quantity" >
                      Qauntity : <span>{cartitem.quantity}</span>
                    </div>
                      
                      <div className="subtotal">
                            SubTotal :   $ { cartitem.subTotal}
                      </div>
                    <div className='update-delete-product'>
                      <div className=" container update-container">
                        <a href="" className='update-product'> Update</a>
                      </div>
                      <div className=" container delete-container">
                        <a href="" className='delete-product'>Delete</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : <div> <h4>Cart items</h4></div>}
           

           </div>
            
   


                <div className="payment-processing-page">
                        <p>CheckOut Page</p>
                    <div className="shipping-process">

                        <div className="items-shipping">
                            <div>item: <span className='number-of-item'>3</span></div>
                            <div className="shipping-price">$46.99</div>

                        </div>
                
                        <div className="items-shipping">
                                <div>Shipping &Handling : </div>
                                <div className="shipping-price">$46.99</div>
                        </div> 
                          
                        <div className="items-shipping">
                                <div>Total price before tax </div>
                                <div className="shipping-price">$46.99</div>
                        </div> 


                        <div className="items-shipping estimate">
                                <div>Estimated tax</div>
                                <div className="shipping-price">$46.99</div>
                        </div> 


                        <div className="items-shipping orders-total-price">
                                <div>Order</div>
                                <div className="order-price">{cart.total}</div>
                        </div>  


                    </div>

                        <div className=" container update-container">
                        <a href="" className='update-product'> Place your order</a>

                        </div>

                </div>
                
         

        
        </div>
        
        </>
    );
}