import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSun, FaMoon } from "react-icons/fa";
import { toggleTheme } from "../redux/theme/themeSlice";

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      className="w-12 h-10 bg-gray-500 rounded-full flex items-center justify-center fixed bottom-6 right-6 z-10"
      onClick={handleThemeToggle}
    >
      {theme === "light" ? (
        <FaSun className="text-yellow-500" />
      ) : (
        <FaMoon className="text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
