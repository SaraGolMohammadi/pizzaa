import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import './Card.css';

const Card = () => {
  const { cart, removeProduct, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  const cartItemsCount = cart.reduce((count, item) => count + item.qty, 0);

  const toggleCart = () => setIsOpen(!isOpen);

  return (
    <div className="cart-wrapper">
      <header className="header">
        <div>
          <nav className="nav-menu">
            <ul className="menu-list">
              <li className="menu-item">Contact</li>
              <li className="menu-item">Shop</li>
              <li className="menu-item">Menu</li>
              <li className="menu-item">Home</li>
            </ul>
          </nav>

          <div className="icons">
            <SearchIcon className="icon" />
            <div className="cart-icon" onClick={toggleCart}>
              <AddShoppingCartIcon className="icon1" />
              {cartItemsCount > 0 && <span className="cart-badge">{cartItemsCount}</span>}
            </div>
            <p className="text-p">Login<LoginIcon /></p>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h3>({cartItemsCount}) Shopping Cart</h3>
            <button onClick={toggleCart} className="close-btn">×</button>
          </div>

          {cart.length === 0 ? (
            <p className="empty-cart">Your shopping cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-info">
                      <img src={item.img} alt={item.name} className="item-img" />
                      <span className="item-name">{item.name}</span>
                      <span className="item-qty">${item.price.toLocaleString()}</span>
                      <button
                        className="remove-btn"
                        onClick={() => removeProduct(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="total-section">
                  <span>:Grand Total</span>
                  <span className="total-price">${total.toLocaleString()}</span>
                </div>
                <button className="checkout-btn" onClick={clearCart}>Payment</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
