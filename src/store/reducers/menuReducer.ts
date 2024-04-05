import { createSlice } from '@reduxjs/toolkit';
import { MenuStateType } from '../../@types/store';

const initialState: MenuStateType = {
  menuData: null,
  loading: false,
  error: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    fetchMenuDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMenuDataSuccess(state, action) {
      state.loading = false;
      state.menuData = action.payload;
    },
    fetchMenuDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchMenuDataStart, fetchMenuDataSuccess, fetchMenuDataFailure } = menuSlice.actions;

export default menuSlice.reducer;
