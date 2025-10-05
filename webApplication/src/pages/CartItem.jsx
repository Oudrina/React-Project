import axios from "axios";
import { useState } from "react";

function CartItem({ carts, product }) {
  const [quantity, setQuantity] = useState(carts.quantity || 1);

  // Update quantity in backend
  const updateQuantity = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/cart/update/${product.id}`,
      );
      response.data
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(newQuantity);
    }
  };

  const deleteCartItem = async () => {
    if (window.confirm("Do you want to delete this item?")) {
      try {
        await axios.delete(`http://localhost:8080/remove/${product.id}`);
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
    window.location.reload()
  };

  return (
    <div className="cart-wrapper">
      <div className="image">
        <img src="/images/product6.jpg" alt={product.name} />
      </div>

      <div className="product-desc">
        <div className="header">{product.name}</div>

        <div className="price">
          <p>${product.price}</p>

          <div className="increaseButton">
            <button className="increase-button" onClick={handleDecrease}>
              -
            </button>

            <span>{quantity}</span>

            <button className="reduce-button" onClick={handleIncrease}>
              +
            </button>

            <div className="subtotal">
              SubTotal: <span>${carts.subTotal}</span>
            </div>
          </div>

          <button className="trash-delete" onClick={deleteCartItem}>
            <i className="bx bx-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
