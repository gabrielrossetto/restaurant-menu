/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSettings } from './store/actions/settingsActions';
import { fetchMenu } from './store/actions/menuActions';
import DefaultLayout from './components/DefaultLayout';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import ErrorPage from './pages/Error';
import { PageComponentType } from "../src/@types/app";
import { applyTheme } from './themes/utils';
import { RootState } from './store/store';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);

  const renderPage = (PageComponent: PageComponentType) => {
    return (
      <DefaultLayout>
        <PageComponent />
      </DefaultLayout>
    );
  };

  useEffect(() => {
    const fetchSettingsData = async () => {
      try {
        // @ts-ignore
        dispatch(fetchSettings());
      } catch (error) {
        console.error('Error getting settings data:', error);
      }
    };

    const fetchMenuData = async () => {
      try {
        // @ts-ignore
        dispatch(fetchMenu());
      } catch (error) {
        console.error('Error getting menu data:', error);
      }
    };

    fetchSettingsData();
    fetchMenuData();
  }, [dispatch]);

  useEffect(() => {
    if (settings && settings?.settings?.webSettings) {
      applyTheme(settings?.settings?.webSettings);
    }
  }, [settings]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={renderPage(Menu)} />
        <Route path="/menu" element={renderPage(Menu)} />
        <Route path="/signin" element={renderPage(SignIn)} />
        <Route path="/contact" element={renderPage(Contact)} />
        <Route path="*" element={renderPage(ErrorPage)} />
      </Routes>
    </Router>
  )
}

export default App
