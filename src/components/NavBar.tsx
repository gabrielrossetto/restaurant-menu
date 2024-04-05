import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [selectedItem, setSelectedItem] = useState('/menu');

  return (
    <nav className="pt-4 bg-navBackground">
      <div className="container flex items-center justify-center mx-auto">
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
      </div>
    </nav>
  );
}

export default NavBar;
