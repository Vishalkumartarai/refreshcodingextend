// src/components/ContactButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FiMail } from "react-icons/fi"; // Using react-icons for the icon

const ContactButton = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <button
      onClick={handleNavigate}
      className="fixed bottom-6 left-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <FiMail size={20} />
    </button>
  );
};

export default ContactButton;
