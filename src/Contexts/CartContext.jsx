import React, { createContext, useState } from 'react'
import { render } from 'react-dom';


export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    console.log(newItem);
    // console.log(product);
    // console.log(` ${product.title}add to cart`);

    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if(cartItem){
      const newCart=[...cart].map(item=>{
        if(item.id===id){
          return{...item, amount:cartItem.amount+1}
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart,newItem])
    }
  }

  console.log(cart);
  return (


    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider