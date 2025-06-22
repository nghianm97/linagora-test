import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-700 tracking-wider">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-light p-1 rounded hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <img src={"../assets/icon-close.svg"} alt="Close" className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="text-center flex justify-center items-center mb-6 mt-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
