import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const bazarSlice = createSlice({
  name: "bazar",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        item => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      } else {
        state.productData.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        item => item.id !== action.payload.id
      );
    },
    resetCart: state => {
      state.productData = [];
    },
    incrementQuantity: (state, action) => {
      let findIdx = state.productData.find(
        item => item.id === action.payload.id
      );
      if (findIdx) {
        findIdx.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      let findIdx = state.productData.find(
        item => item.id === action.payload.id
      );
      if (findIdx.quantity == 1) {
        findIdx.quantity = 1;
      } else {
        findIdx.quantity--;
      }
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: state => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  addUser,
  removeUser,
  decrementQuantity,
  incrementQuantity,
} = bazarSlice.actions;
export default bazarSlice.reducer;
