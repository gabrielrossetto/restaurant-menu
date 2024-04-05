import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

function Header() {
  const { settings } = useSelector((state: RootState) => state.settings);

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center w-full h-48 overflow-hidden bg-primary">
        {settings?.webSettings?.bannerImage ? (
          <img
            src={settings.webSettings.bannerImage}
            alt="Header Image"
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={logo} alt="Logo" className="object-contain h-40" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
