import React from "react";
import Slider from "react-slick";
import YouTubeVideoCard from "../components/YoutubeVideoCard"; // Adjust the import path as needed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const YouTubeSlider = ({ videos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show two slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    centerMode: false, // Disable center mode
  };

  return (
    <div className="relative max-w-6xl mx-auto ">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Recent YouTube Videos
      </h2>
      <div className="w-full">
        <Slider {...settings}>
          {videos.map((video) => (
            <div className="flex justify-center p-4" key={video._id}>
              <YouTubeVideoCard video={video} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default YouTubeSlider;
