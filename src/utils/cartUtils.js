export const updateQuantity = (setCart, id, increment) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + increment) }
        : item
    )
  );
};

export const removeItem = (setCart, id) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== id));
};

export const calculateSubtotal = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}; 