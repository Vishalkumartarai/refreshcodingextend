import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button
      className="fixed top-2 left-2 sm:top-4 sm:left-4 flex items-center px-2 py-1 sm:px-4 sm:py-2 bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-800 rounded-lg shadow-lg hover:bg-blue-500 dark:hover:bg-blue-300 transition duration-300"
      onClick={handleBackClick}
    >
      <FaArrowLeft className="mr-1 sm:mr-2" />
      Back
    </button>
  );
};

export default BackButton;
