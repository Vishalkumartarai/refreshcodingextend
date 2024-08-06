import React, { useState } from "react";
import { Modal } from "flowbite-react";
import barcodeImage from "../images/collab/barcode.jpeg"; // Adjust the path to your barcode image

const SupportComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSupportClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative flex flex-col items-center my-12">
      <button
        className="fixed bottom-6 left-20 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
        onClick={handleSupportClick}
      >
        Support Us
      </button>

      <Modal
        show={showModal}
        onClose={closeModal}
        size="md"
        className="flex items-center justify-center"
      >
        <Modal.Body className="bg-white p-6 rounded-lg shadow-lg relative custom-modal-body">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-all duration-300"
            onClick={closeModal}
          >
            &times;
          </button>
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Support Us</h2>
            <img
              src={barcodeImage}
              alt="Support Barcode"
              className="w-auto h-auto max-w-full max-h-60 object-contain mb-4"
            />
            <p className="text-center text-gray-700">
              Scan the barcode to donate and support our page.
            </p>
          </div>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .custom-modal-body {
          width: 100%; /* Adjust width as needed */
          height: auto;
          max-width: 400px; /* Optional max-width for larger screens */
          max-height: 70vh; /* Optional max-height to avoid very tall modals */
          position: relative;
        }

        .custom-modal-body::after {
          content: "";
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 30%;
          height: 20px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 -10px 15px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default SupportComponent;
