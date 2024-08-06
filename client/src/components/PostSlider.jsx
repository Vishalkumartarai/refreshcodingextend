import React from "react";
import Slider from "react-slick";
import PostCard from "../components/PostCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/customSlider.css"; // Create this CSS file for additional styling

const PostSlider = ({ posts }) => {
  // Settings for the top slider
  const topSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Settings for the bottom slider
  const bottomSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: true,
    rtl: true, // Right-to-left mode for the bottom slider
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  // Slice posts to get top and bottom rows
  const topPosts = posts.slice(0, 3); // Get the first 3 posts for the top slider
  const bottomPosts = posts.slice(-3); // Get the last 3 posts for the bottom slider

  return (
    <div className="relative max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Recent Blogs</h2>
      <div className="w-full">
        {/* Top Slider */}
        <div className="slider-row">
          <Slider {...topSliderSettings}>
            {topPosts.map((post) => (
              <div className="p-4" key={post.id}>
                <PostCard post={post} />
              </div>
            ))}
          </Slider>
        </div>
        {/* Bottom Slider */}
        <div className="slider-row">
          <Slider {...bottomSliderSettings}>
            {bottomPosts.map((post) => (
              <div className="p-4" key={post.id}>
                <PostCard post={post} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PostSlider;
