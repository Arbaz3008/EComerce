import { createContext, useEffect, useState, useMemo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    try {
      const storedCarts = await AsyncStorage.getItem("carts");
      const parsedCarts = storedCarts ? JSON.parse(storedCarts) : [];
      setCarts(parsedCarts);
      totalSum(parsedCarts);
    } catch (error) {
      console.error("Failed to load cart items", error);
    }
  };

  const addToCart = async (item) => {
    const itemExist = carts.findIndex((cart) => cart.id === item.id);
    if (itemExist === -1) {
      const newCartItems = [...carts, item];
      try {
        await AsyncStorage.setItem("carts", JSON.stringify(newCartItems));
        setCarts(newCartItems);
        totalSum(newCartItems);
      } catch (error) {
        console.error("Failed to add item to cart", error);
      }
    }
  };

  const deleteItemFromCart = async (item) => {
    const newItems = carts.filter((cart) => cart.id !== item.id);
    try {
      setCarts(newItems);
      await AsyncStorage.setItem("carts", JSON.stringify(newItems));
      totalSum(newItems);
    } catch (error) {
      console.error("Failed to delete item from cart", error);
    }
  };

  const totalSum = (cartItems) => {
    const total = cartItems.reduce((amount, item) => amount + item.price, 0);
    setTotalPrice(total);
  };

  const value = useMemo(() => ({
    carts,
    addToCart,
    totalPrice,
    deleteItemFromCart,
  }), [carts, totalPrice]);

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};
