import { createSlice } from '@reduxjs/toolkit';
import { ItemType } from '../../../@types';

type MyItemType = {
  item: ItemType | null;
  categoryItem: any;
  paintings: []
  drawings: [],
  sculpture: [],
  ceramics: [],
  digitalArt: [],
  textileArt: []
};

const initialState: MyItemType = {
  item: null,
  categoryItem: null,
  paintings: [],
  drawings: [],
  sculpture: [],
  ceramics: [],
  digitalArt: [],
  textileArt: []
};

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItem: (state, { payload }) => {
      state.item = payload;
    },
    setCategoryItem: (state, { payload }) => {
      state.categoryItem = payload;
    },
    setPaintings: (state, { payload }) => {
      state.paintings = payload
    },
    setDrawings: (state, { payload }) => {
      state.drawings = payload
    },
    setSculpture: (state, { payload }) => {
      state.sculpture = payload
    },
    setCeramics: (state, { payload }) => {
      state.ceramics = payload
    },
    setDigitalArts: (state, { payload }) => {
      state.digitalArt = payload
    },
    setTextileArts: (state, { payload }) => {
      state.textileArt = payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setItem, setCategoryItem } = itemSlice.actions;

export default itemSlice.reducer;
