import React, { useState } from 'react';
import establecimientoImg from '../imgs/local/jormilcar.jpg'; // Importa la imagen de fondo

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name) newErrors.name = 'El nombre es obligatorio.';
    if (!email) newErrors.email = 'El correo electrónico es obligatorio.';
    if (!message) newErrors.message = 'El mensaje es obligatorio.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Formulario enviado!');
      // Aquí puedes añadir la lógica para enviar el formulario
    }
  };

  return (
    <section id="contact-form" className="p-8 bg-cover bg-center" style={{ backgroundImage: `url(${establecimientoImg})` }}>
      <div className="bg-gray-900 bg-opacity-75 p-8 rounded-lg max-w-3xl mx-auto">
        <h2 className="text-3xl mb-4 text-white text-center">Contacto</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-white" htmlFor="name">Nombre</label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label className="block mb-1 text-white" htmlFor="email">Correo Electrónico</label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label className="block mb-1 text-white" htmlFor="message">Mensaje</label>
            <textarea
              className="w-full px-3 py-2 border rounded"
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
