import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../../context/StoreContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item.id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.title} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2> Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 100}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>
              ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 100}
            </p>
          </div>

          <Link to="/order">
            <button>PROCEED TO CHECKOUT</button>
          </Link>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Have a promocode? Enter it here! </p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter promocode" />
              <button>Apply!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
