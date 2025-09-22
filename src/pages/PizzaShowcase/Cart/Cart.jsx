import React from 'react';
import data from '../../../data';
import './Cart.css';
import AddIcon from '@mui/icons-material/Add';
import { useCart } from '../../../context/CartContext';

export default function Cart() {
  const { addProduct } = useCart();

  return (
    <div className="cart-container">
      {data.map((item) => (
        <div key={item.id} className="cart-div">
          <img src={item.img} alt={item.title} />
          
          <div className="cart-p">
            <p>{item.title}</p>
            <button
              className="price"
              onClick={() =>
                addProduct({
                  id: item.id,
                  name: item.title,
                  price: item.Price,
                  img: item.img,
                })
              }
            >
              ${item.Price} <AddIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
