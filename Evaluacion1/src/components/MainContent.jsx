import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import establecimientoImg from '../imgs/local/jormilcar.jpg'; // Ruta a tu imagen

const MainContent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar la visibilidad del modal

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollPosition]);

  // Función para abrir el modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="main-content" className="relative bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${isVisible ? 'opacity-0' : 'opacity-100'}`}>
          <img
            src={establecimientoImg}
            alt="Establecimiento"
            className="w-full h-full object-cover absolute inset-0"
            style={{ filter: 'brightness(50%)' }}
          />
        </div>

        <div className="relative z-10">
          <h2 className={`text-4xl font-bold mb-6 text-gray-100 ${isVisible ? 'opacity-100 transition-opacity duration-1000 delay-500' : 'opacity-0'}`}>
            Bienvenido a Jormilcar CIA LTDA
          </h2>
          <p className={`text-lg mb-8 text-gray-200 ${isVisible ? 'opacity-100 transition-opacity duration-1000 delay-1000' : 'opacity-0'}`}>
            Tu socio confiable en el sector automotriz, comprometido con la calidad y el servicio desde 2007.
          </p>

          <div className={`space-y-6 ${isVisible ? 'opacity-100 transition-opacity duration-1000 delay-1500' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">Nuestra Historia</h3>
              <p className="text-gray-200">
                Desde nuestra fundación, nos destacamos por ofrecer soluciones integrales en la venta, renta y mantenimiento de vehículos en Quito, Ecuador.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">Misión</h3>
              <p className="text-gray-200">
                Ofrecer vehículos de calidad a precios competitivos, superando las expectativas de nuestros clientes en cada experiencia.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">Visión</h3>
              <p className="text-gray-200">
                Ser reconocidos como líderes en el mercado automotriz, con una base de clientes fieles y satisfechos a nivel nacional e internacional.
              </p>
            </div>
          </div>

          <button
            className={`bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 mt-8 inline-block transition duration-300 ${isVisible ? 'opacity-100 transition-opacity duration-1000 delay-2000' : 'opacity-0'}`}
            onClick={handleOpenModal} // Abrir el modal al hacer clic en el botón
          >
            Ver Más
          </button>
          <Modal show={isModalOpen} onClose={handleCloseModal}>
            <div className="p-6 text-gray-900">
              <h2 className="text-2xl font-bold mb-4">¡Gracias por tu interés!</h2>
              <p className="text-gray-800">
                Estamos comprometidos con la excelencia en cada aspecto de nuestro servicio. ¡Contáctanos para más información!
              </p>
            </div>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
