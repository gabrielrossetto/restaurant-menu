import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './reducers/menuReducer';
import settingsReducer from './reducers/settingsReducer';
import cartReducer from './reducers/cartReducer';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    settings: settingsReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;