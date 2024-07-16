import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white max-w-lg mx-auto rounded-lg shadow-lg z-50">
        <div className="p-6">{children}</div>
        <button className="bg-red-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-red-600" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
