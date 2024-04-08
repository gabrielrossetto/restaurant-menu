import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery, useTheme, IconButton, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const [selectedItem, setSelectedItem] = useState('/menu');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    handleCloseDrawer();
  };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleOpenDrawer = () => setDrawerOpen(true);
  const handleCloseDrawer = () => setDrawerOpen(false);

  return (
    <nav className="md:pt-4 bg-navBackground">
      <div className="container flex items-center justify-center mx-auto">
        {isMobile ? (
          <div className="flex items-center justify-between w-full">
            <div className="w-8"></div>
            <span className="w-32 text-center text-white">
              {selectedItem === '/menu' ? `${t('navMenu')}` : selectedItem === '/signin' ? `${t('navSignIn')}` : `${t('navContact')}`}
            </span>
            <IconButton onClick={handleOpenDrawer} className="!text-white">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={handleCloseDrawer}>
              <List>
                <Link
                  to="/menu"
                  className={`w-32 text-center ${selectedItem === '/menu' ? 'border-b-4 border-white' : ''}`}
                  onClick={() => setSelectedItem('/menu')}
                >
                  <ListItemButton onClick={() => handleItemClick('/menu')}>
                    <ListItemText primary={t('navMenu')} />
                  </ListItemButton>
                </Link>
                <Link
                  to="/signin"
                  className={`w-32 text-center ${selectedItem === '/signin' ? 'border-b-4 border-white' : ''}`}
                  onClick={() => setSelectedItem('/signin')}
                >
                  <ListItemButton onClick={() => handleItemClick('/signin')}>
                    <ListItemText primary={t('navSignIn')} />
                  </ListItemButton>
                </Link>
                <Link
                  to="/contact"
                  className={`w-32 text-center ${selectedItem === '/contact' ? 'border-b-4 border-white' : ''}`}
                  onClick={() => setSelectedItem('/contact')}
                >
                  <ListItemButton onClick={() => handleItemClick('/contact')}>
                    <ListItemText primary={t('navContact')} />
                  </ListItemButton>
                </Link>
              </List>
            </Drawer>
          </div>
        ) : (
          <div className="flex space-x-8">
            <Link
              to="/menu"
              className={`text-white w-32 text-center ${selectedItem === '/menu' ? 'border-b-4 border-white' : ''}`}
              onClick={() => setSelectedItem('/menu')}
            >
              MENU
            </Link>
            <Link
              to="/signin"
              className={`text-white w-32 text-center ${selectedItem === '/signin' ? 'border-b-4 border-white' : ''}`}
              onClick={() => setSelectedItem('/signin')}
            >
              ENTRAR
            </Link>
            <Link
              to="/contact"
              className={`text-white w-32 text-center ${selectedItem === '/contact' ? 'border-b-4 border-white' : ''}`}
              onClick={() => setSelectedItem('/contact')}
            >
              CONTATO
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
