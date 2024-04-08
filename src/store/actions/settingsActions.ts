import { fetchSettingsFailure, fetchSettingsStart, fetchSettingsSuccess } from '../reducers/settingsReducer';
import { Dispatch } from 'redux';
import i18n from '../../i18n';

export const fetchSettings = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchSettingsStart());
    try {
      const response = await fetch('/api-settings');
      if (!response.ok) {
        throw new Error('Error getting settings');
      }
      const settings = await response.json();

      if (settings.locale) {
        i18n.changeLanguage(settings.locale);
      }

      dispatch(fetchSettingsSuccess(settings));
    } catch (error) {
      let message = 'Unknown Error'
      if (error instanceof Error) message = error.message
      dispatch(fetchSettingsFailure(message));
    }
  };
};
