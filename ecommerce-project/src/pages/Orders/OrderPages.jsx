   import './OrderPages.css' 

   export function OrderPages(){ 

    return(
    <>
       <title>Orders</title>

       <div className="order-container">

         <h4>Your Order Review</h4>

           <div className="order-detail orders">
                 <div className="order-date">
                  <p>November , 2nd , 2024</p>
                  </div>
                   
                    <div className="order-coat">
                  Total <span>$88.99</span>
               </div>
       
               <div className="order-id">
                 OrderId: <span>6d7694hl9-284uhb9990n3gh3</span>
               </div>

           </div>

           <div className="orders-available orders">

                   <div className='product-order-page'>
                    <img src="images/product6.jpg" alt="" />

                        <div className="product-checkout-detail">
                           <div className="product-description-name">
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                Lorem ipsum dolor sit amet 2lefeiofne febfeld,d shchdd;d,
                                </a>
                         </div>   
                        
                   <div className="price-quantits">
                        <span className='product-prices'> $6.000</span>
                     </div>

                      <div  className="quantity-number"type="text" name="quantity" id="quantity" >
                           Qauntity : <span>2</span>
                        </div>

                      <div className='update-delete-product'>
                            <div className=" container update-container">
                                <a href="" className='update-product'> Add to cart</a>

                            </div>
                            

                     </div>

                </div>
            </div>
                
           </div>

       </div>



      </>
    );

}