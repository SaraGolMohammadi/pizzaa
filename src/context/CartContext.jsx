import { useState, useContext, createContext } from "react";


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const addProduct = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
 
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  
  const removeProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };


  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
