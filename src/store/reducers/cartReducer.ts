import { createSlice } from '@reduxjs/toolkit';
import { CartItemsType } from '../../@types/store';
import { MenuItemType } from '../../@types/menu';

const initialState: CartItemsType = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      state.total = calculateTotal(state.items);
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.total = calculateTotal(state.items);
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

const calculateTotal = (items: MenuItemType[]) => {
  let total = 0;
  items.forEach(item => {
    const itemQuantity = item.quantity || 1;
    total += ((item.price || 0) + (item.selectedModifierPrice || 0)) * itemQuantity;
  });
  return total;
};

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
