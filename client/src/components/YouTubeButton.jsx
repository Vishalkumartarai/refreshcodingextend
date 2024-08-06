import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const YouTubeButton = () => {
  return (
    <div className="h-28 w-28 m-5 p-4 rounded-2xl shadow-lg shadow-indigo-600 grid place-content-center">
      <a
        href="https://www.youtube.com/@refreshcoding"
        target="_blank"
        rel="noopener noreferrer"
        className="youtube-link"
      >
        <FontAwesomeIcon icon={faYoutube} className="text-red-600 h-16 w-16" />
      </a>
    </div>
  );
};

export default YouTubeButton;
