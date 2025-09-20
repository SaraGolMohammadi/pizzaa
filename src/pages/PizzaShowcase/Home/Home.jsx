import React from 'react'
import { CartProvider } from '../../../context/CartContext';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import PizzaShowcase from '../PizzaShowcase';

export default function Home() {
  return (
    <CartProvider>
      <Card />
      <PizzaShowcase/>
      <Cart/>
      
    </CartProvider>
  )
}
