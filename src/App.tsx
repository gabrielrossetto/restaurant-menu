import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSettings } from './store/actions/settingsActions';
import { fetchMenu } from './store/actions/menuActions';
import DesktopLayout from './components/templates/DesktopLayout';
import MobileLayout from './components/templates/MobileLayout';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
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
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const settings = useSelector((state: RootState) => state.settings);

  const renderPage = (PageComponent: PageComponentType) => {
    return isMobile ? (
      <MobileLayout>
        <PageComponent />
      </MobileLayout>
    ) : (
      <DesktopLayout>
        <PageComponent />
      </DesktopLayout>
    );
  };

  useEffect(() => {
    const fetchSettingsData = async () => {
      try {
        dispatch(fetchSettings());
      } catch (error) {
        console.error('Error getting settings data:', error);
      }
    };

    const fetchMenuData = async () => {
      try {
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
        {/* TODO: Error Page */}
        <Route path="*" element={renderPage(Menu)} />
      </Routes>
    </Router>
  )
}

export default App
