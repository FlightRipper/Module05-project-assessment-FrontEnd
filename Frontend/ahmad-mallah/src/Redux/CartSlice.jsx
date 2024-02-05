import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  try {
    const savedCart = localStorage.getItem('cart');
    const initialState = savedCart ? JSON.parse(savedCart) : [];
    return initialState;
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return [];
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      const isItemInCart = state.find((cartItem) => cartItem._id === action.payload._id);

      if (isItemInCart) {
        isItemInCart.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.findIndex((cartItem) => cartItem._id === action.payload._id);

      if (itemIndex > -1) {
        state.splice(itemIndex, 1);
      }

      localStorage.setItem('cart', JSON.stringify(state));
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const cartItem = state.find((item) => item._id === productId);

      if (cartItem) {
        cartItem.quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    clearCart: (state) => {
      localStorage.removeItem('cart');
      return []
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
