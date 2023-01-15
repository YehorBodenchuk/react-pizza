import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      findItem ? findItem.count++ : state.items.push({ ...action.payload, count: 1 });
      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => action.payload !== obj.id);
      state.totalPrice = state.items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
    },
    decrementItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice -= findItem.price;
      if (!findItem.count) {
        state.items = state.items.filter((obj) => findItem.id !== obj.id);
      }
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    minusTotalPrice(state, action) {
      state.totalPrice -= action.payload;
    },
  },
});

export const { addItem, removeItem, clearItems, decrementItem } = cartSlice.actions;

export default cartSlice.reducer;
