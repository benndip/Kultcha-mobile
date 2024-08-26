import { createSlice } from '@reduxjs/toolkit';
import { ItemType } from '../../../@types';

type MyItemType = {
  item: ItemType | null;
  favorites: any;
  categoryItem: any;
};

const initialState: MyItemType = {
  item: null,
  categoryItem: null,
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
    setCategoryItem: (state, { payload }) => {
      state.categoryItem = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setItem, setFavorites, setCategoryItem } = itemSlice.actions;

export default itemSlice.reducer;
