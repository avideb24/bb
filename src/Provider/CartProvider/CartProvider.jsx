'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext(null);

export const useCart = () => useContext(CartContext);


const CartProvider = ({children}) => {

    const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const values = [cart, setCart];

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;