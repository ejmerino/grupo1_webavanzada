import React from 'react';
import establecimientoImg from '../imgs/local/jormilcar.jpg'; // Ruta a tu imagen
import imagen1 from '../imgs/autos/imagen1.jpg';
import imagen2 from '../imgs/autos/imagen2.jpg';
import imagen3 from '../imgs/autos/imagen3.jpg';
import imagen4 from '../imgs/autos/imagen4.jpg';
import imagen5 from '../imgs/autos/imagen5.jpg';
import imagen6 from '../imgs/autos/imagen6.jpg';
import imagen7 from '../imgs/autos/imagen7.jpg';
import imagen8 from '../imgs/autos/imagen8.jpg';
import imagen9 from '../imgs/autos/imagen9.jpg';

const Gallery = () => {
  const images = [
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
    imagen9
  ];

  return (
    <section id="gallery" className="p-8 bg-gray-100" style={{ backgroundImage: `url(${establecimientoImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={image} alt={`Imagen ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
