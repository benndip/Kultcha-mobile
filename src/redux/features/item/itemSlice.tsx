import { createSlice } from '@reduxjs/toolkit';
import { ItemType } from '../../../@types';

type MyItemType = {
  item: ItemType | null;
  favorites: any;
};

const initialState: MyItemType = {
  item: null,
  favorites: [],
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItem: (state, { payload }) => {
      state.item = payload;
    },
    setFavorites: (state, { payload }) => {
      state.favorites = [...(state?.favorites ?? []), payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setItem, setFavorites } = itemSlice.actions;

export default itemSlice.reducer;
