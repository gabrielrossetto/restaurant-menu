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
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        if (
          state.items[existingItemIndex].selectedModifierId !== newItem.selectedModifierId ||
          state.items[existingItemIndex].selectedModifierPrice !== newItem.selectedModifierPrice
        ) {
          state.items.push(newItem);
        } else {
          state.items[existingItemIndex].quantity += newItem.quantity || 1;
        }
      } else {
        state.items.push(newItem);
      }

      state.total = calculateTotal(state.items);
    },
    incrementQuantity(state, action) {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = (item.quantity ?? 0) + 1;
        state.total = calculateTotal(state.items);
      }
    },
    decrementQuantity(state, action) {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item && item.quantity && item.quantity > 1) {
        item.quantity -= 1;
        state.total = calculateTotal(state.items);
      }
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

export const { addItem, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;