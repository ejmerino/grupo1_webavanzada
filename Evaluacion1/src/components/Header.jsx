import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo/Logo_JormilCar_Blanco.png';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Mi Logo" className="h-12 mr-2" />
      </div>
      <nav className="flex items-center space-x-6">
        <Link to="/" className="text-xl hover:text-blue-400">Inicio</Link>
        <Link to="/gallery" className="text-xl hover:text-blue-400">Galería</Link>
        <Link to="/contact" className="text-xl hover:text-blue-400">Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;
