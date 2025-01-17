import React, { useState } from "react";

const YouTubeVideoCard = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="relative w-full max-w-[400px] h-[350px] border-4 bg-white dark:bg-slate-800 border-white-600 hover:border-indigo-600 overflow-hidden rounded-[30px] transition-all duration-300 cursor-pointer mx-auto shadow-lg shadow-indigo-600"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() =>
        window.open(video.youtubeLink, "_blank", "noopener,noreferrer")
      }
    >
      <div
        className={`w-full h-[60%] flex items-center justify-center p-4 transition-transform duration-300 ${
          isHovered ? "transform scale-105" : ""
        }`}
      >
        <img
          src={video.coverImage}
          alt={video.heading}
          className="w-full h-full object-cover rounded-[20px] shadow-lg shadow-indigo-600 dark:shadow-indigo-600"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 h-[40%] justify-center items-center text-center bg-white dark:bg-slate-800">
        <p className="text-lg font-semibold line-clamp-2 group-hover:text-blue-800 transition-all duration-300">
          {video.heading}
        </p>
        <span className="italic text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-800 transition-all duration-300">
          {video.description}
        </span>
      </div>
      <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
  );
};

export default YouTubeVideoCard;
