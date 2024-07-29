import React, { useState } from "react";

const YouTubeVideoCard = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="relative w-full max-w-[400px] h-[350px] border-4 bg-white border-blue-600 hover:border-blue-800 overflow-hidden rounded-[30px] transition-all duration-300 cursor-pointer mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() =>
        window.open(video.youtubeLink, "_blank", "noopener,noreferrer")
      }
    >
      <div
        className={`w-full h-[60%] flex items-center justify-center p-4 transition-transform duration-300 bg-gray-100 ${
          isHovered ? "transform scale-105" : ""
        }`}
      >
        <img
          src={video.coverImage}
          alt={video.heading}
          className="w-auto h-full object-cover rounded-[20px]"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 h-[40%] justify-center items-center text-center bg-white">
        <p className="text-lg font-semibold line-clamp-2 group-hover:text-blue-800 transition-all duration-300">
          {video.heading}
        </p>
        <span className="italic text-sm text-gray-700 group-hover:text-blue-800 transition-all duration-300">
          {video.description}
        </span>
      </div>
      <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
  );
};

export default YouTubeVideoCard;
