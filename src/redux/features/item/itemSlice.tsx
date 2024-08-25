import { ItemType } from '@/@types';
import { createSlice } from '@reduxjs/toolkit';

type MyItemType = {
  item: ItemType | null;
};

const initialState: MyItemType = {
  item: null,
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItem: (state, { payload }) => {
      state.item = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setItem } = itemSlice.actions;

export default itemSlice.reducer;
