import React from 'react';
import facebookLogo from '../imgs/logo/Facebook.png';
import instagramLogo from '../imgs/logo/Instagram.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-2">Contacto</h2>
          <p className="text-gray-400 mb-1">Dirección: Av. Gral Rumiñahui entre Isla San Cristobal e Isla Genovesa, Quito, Ecuador</p>
          <p className="text-gray-400 mb-1">Teléfono: +593 393 622 34</p>
          <p className="text-gray-400 mb-1">Email: jormilcar@hotmail.com</p>
        </div>
        <div className="flex flex-col items-center mt-2 md:mt-0">
          <h2 className="text-lg font-bold mb-2">Síguenos</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/Jormilcar.ec" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
              <img src={facebookLogo} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/jormilcar_ec/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
              <img src={instagramLogo} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-400">
        <p>&copy; 2024 Marlyn Almeida, Erick Andrade, Josué Merino. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
