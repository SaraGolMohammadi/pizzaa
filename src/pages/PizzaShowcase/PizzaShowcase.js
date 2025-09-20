import React from 'react'
import './PizzaShowcase.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function PizzaShowcase() {
  return (
    <div className="pizza-showcase-container">
      <div className="pizza-showcase-card">
        <div className="pizza-image-wrapper">
          <img src="../img/64b42ab03b414-removebg-preview.png" alt="Vegan Pizza" className="pizza-image" />
        </div>

       <div className='pizza-text'>
        <h1 className="pizza-title">
          Vegan<span className="highlight">Pizza</span>
        </h1>

        <h6 className="pizza-description">
          vegan needn't miss out on pizza. our recipe combines the classic flavours of this Italian comfort food using plant-based substitutes
        </h6>
        
        <div className="pizza-action">
          <button className="add-to-cart-btn"> <AddShoppingCartIcon/>Add to cart </button>
          <p className="pizza-price">$8.9</p>
        </div></div>
      </div>
      
       
    </div>
  )
}
