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
      className="fixed top-4 left-4 flex items-center px-3 py-2 bg-gray-800 dark:bg-slate-400 text-white dark:text-black rounded shadow hover:bg-gray-700 transition duration-300"
      onClick={handleBackClick}
    >
      <FaArrowLeft className="mr-2" />
      Back
    </button>
  );
};

export default BackButton;
