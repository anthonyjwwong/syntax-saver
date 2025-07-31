import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4 z-10">
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}

        <div className="mb-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
