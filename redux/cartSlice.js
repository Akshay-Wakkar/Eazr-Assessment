import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newList = [...state.items];

      if (index >= 0) {
        newList.splice(index, 1);
      } else {
        console.warn(`Cannot remve product id: ${action.payload.id}`);
      }

      state.items = newList;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;


export const selectItems = (state) => state.cart.items;

export const selectedId = (state) => {
  var allIds = state.cart.items.map((item) => {

    return item.id
  }

  )
  return allIds
}
export const selectTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => parseFloat(total) + parseFloat(item.price),
    0
  );


export default cartSlice.reducer
