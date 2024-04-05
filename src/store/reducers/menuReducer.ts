import { createSlice } from '@reduxjs/toolkit';
import { MenuStateType } from '../../@types/store';

const initialState: MenuStateType = {
  menuData: null,
  loading: false,
  error: null,
  searchFilter: '',
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
    setSearchFilter(state, action) {
      state.searchFilter = action.payload;
    },
  },
});

export const { fetchMenuDataStart, fetchMenuDataSuccess, fetchMenuDataFailure, setSearchFilter } = menuSlice.actions;

export default menuSlice.reducer;
