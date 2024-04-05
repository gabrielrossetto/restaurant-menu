import { fetchMenuDataStart, fetchMenuDataSuccess, fetchMenuDataFailure } from '../reducers/menuReducer';
import { Dispatch } from 'redux';

export const fetchMenu = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchMenuDataStart());
    try {
      const response = await fetch('/api-menu');
      if (!response.ok) {
        throw new Error('Error getting menu');
      }
      const menuData = await response.json();
      dispatch(fetchMenuDataSuccess(menuData));
    } catch (error) {
      let message = 'Unknown Error'
      if (error instanceof Error) message = error.message
      dispatch(fetchMenuDataFailure(message));
    }
  };
};