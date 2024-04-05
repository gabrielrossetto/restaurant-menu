import { createSlice } from '@reduxjs/toolkit';
import { SettingsStateType } from '../../@types/store';

const initialState: SettingsStateType = {
  settings: null,
  loading: false,
  error: null,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    fetchSettingsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSettingsSuccess(state, action) {
      state.loading = false;
      state.settings = action.payload;
    },
    fetchSettingsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchSettingsStart, fetchSettingsSuccess, fetchSettingsFailure } = settingsSlice.actions;

export default settingsSlice.reducer;
