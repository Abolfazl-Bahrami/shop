import { createContext, useState } from "react";

export const ShopContext = createContext(null);
export const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const addCart = (itemId) => {
    if (!cartItem?.find((item) => item.id === itemId))
      setCartItem([...cartItem, { id: itemId, count: 1 }]);
    else
      setCartItem(
        cartItem.map((item) => {
          if (item.id === itemId) return { ...item, count: item.count + 1 };
          else return item;
        })
      );
    console.log(cartItem);
  };
  const removeCart = (itemId) => {
    setCartItem(
      cartItem.map((i) => {
        if (i.id === itemId) return { ...i, count: i.count ===0 ? 0 : i.count - 1 };
        else return i;
      })
    );
  };
  const contextValue = { cartItem, addCart, removeCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
