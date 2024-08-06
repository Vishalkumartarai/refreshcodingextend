import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import CourseCard from "../components/CourseCard"; // Adjust the import path as needed
import Projects from "./Projects";
import YouTubeSlider from "../components/YoutubeSlider"; // Import the new component
import FAQComponent from "../components/FAQComponent";
import ReviewComponent from "../components/Review";
import SupportComponent from "../components/SupportComponent";
import image from "../images/review/about.png";
import YouTubeButton from "../components/YouTubeButton";
import PostSlider from "../components/PostSlider";
import { Footer } from "flowbite-react";

import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [errorPosts, setErrorPosts] = useState(null);

  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [errorCourses, setErrorCourses] = useState(null);

  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [loadingYoutubeVideos, setLoadingYoutubeVideos] = useState(true);
  const [errorYoutubeVideos, setErrorYoutubeVideos] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/post/getPosts`
        );
        const data = await res.json();
        setPosts(data.posts);
      } catch (err) {
        setErrorPosts("Failed to fetch posts");
      } finally {
        setLoadingPosts(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/course/getcourses?limit=4`
        );
        const data = await res.json();
        setCourses(data.courses);
      } catch (err) {
        setErrorCourses("Failed to fetch courses");
      } finally {
        setLoadingCourses(false);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchYoutubeVideos = async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/youtube-videos/getvideos?limit=4`
        );
        const data = await res.json();

        setYoutubeVideos(data);
      } catch (err) {
        setErrorYoutubeVideos("Failed to fetch YouTube videos");
      } finally {
        setLoadingYoutubeVideos(false);
      }
    };
    fetchYoutubeVideos();
  }, []);

  // Helper function to wrap each letter in a span
  const animateText = (text) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className={`inline-block opacity-0 animate-letter-fade-in-loop ${
          char === " " ? "mr-2" : ""
        }`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {char}
      </span>
    ));
  };
  const Footer = {
    Icon: ({ href, target, icon: IconComponent, className, hoverColor }) => (
      <a
        href={href}
        target={target}
        className={`${className} hover:${hoverColor}`}
      >
        <IconComponent size={24} />
      </a>
    ),
  };

  return (
    <div className=" full-width-container bg-main-background  bg-white dark:bg-slate-700 w-screen">
      <div className="relative p-4 sm:p-10 lg:p-20 max-w-6xl mx-auto ">
        <div className="flex items-center mb-6 left-0">
          <div className="w-24 h-24 rounded-lg shadow-lg shadow-indigo-600 flex items-center justify-center -ml-4">
            <img
              src="https://yt3.googleusercontent.com/T_u5Eh3bABO6ICXY_eSZtgEhM1smZXJNx2x_v7GYW3kmjO7UMSBBLYWvtU57iolXKdf7U6NZ=s176-c-k-c0x00ffffff-no-rj"
              alt="Logo"
              className="w-20 h-20 rounded-full"
            />
          </div>
        </div>

        <div className="ml-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-indigo-500">
            REFRESH CODING
          </h1>
          <p className="text-xl sm:text-base md:text-lg lg:text-3xl mb-4 text-green-500">
            {animateText("Coding is FUTURE !!")}
          </p>
        </div>

        <div className="mb-6 flex flex-col-reverse lg:flex-row items-center">
          <div className="flex-1 mr-5 lg:mr-20">
            <YouTubeButton />
          </div>
          <div className="section-home-image mt-10 lg:mt-0 flex justify-center items-end bg-indigo-500 border-2 border-indigo-500 rounded-[18px_95px_22px_50px] w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 h-[10vh] animate-floatImage">
            <img
              src={image}
              alt="home image"
              className="home-img w-full h-auto object-cover sm:max-w-[30vw] sm:max-h-[20vh] md:max-w-[30vw] md:max-h-[30vh] lg:max-w-md lg:max-h-[35vh] xl:max-w-lg xl:max-h-[40vh]"
            />
          </div>
        </div>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-green-500 font-bold hover:underline mb-6 inline-block"
        >
          View all NewsLetters
        </Link>
      </div>

      <div className="bg-main-background dark:bg-slate-600 py-8">
        <div className="max-w-6xl mx-auto">
          <YouTubeSlider videos={youtubeVideos} />
        </div>
        <div className="flex justify-center my-6">
          <div className="flex flex-wrap gap-4 p-4 rounded-xl shadow-lg shadow-indigo-600 bg-white dark:bg-slate-700 max-w-full sm:gap-6">
            <Footer.Icon
              href="https://www.facebook.com/RefreshCodingM/"
              target="_blank"
              icon={BsFacebook}
              className="text-black"
              hoverColor="text-blue-600" // Facebook blue
            />
            <Footer.Icon
              href="https://www.instagram.com/refreshcoding/"
              target="_blank"
              icon={BsInstagram}
              className="text-black"
              hoverColor="text-purple-600" // Adjusted Instagram color
            />
            <Footer.Icon
              href="https://www.github.com/madhulika3016"
              target="_blank"
              icon={BsGithub}
              className="text-black"
              hoverColor="text-gray-900" // Adjusted GitHub color
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/madhulika-dubey3/"
              target="_blank"
              icon={BsLinkedin}
              className="text-black"
              hoverColor="text-blue-500" // LinkedIn blue
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-3 py-8">
          <PostSlider
            posts={posts}
            loadingPosts={loadingPosts}
            errorPosts={errorPosts}
          />
          <Link
            to="/search"
            className="text-lg text-green-500 hover:underline text-center block mt-8"
          >
            View all NewsLetters
          </Link>
        </div>

        <div className="max-w-6xl mx-auto px-3 py-8">
          {loadingCourses && <p>Loading courses...</p>}
          {errorCourses && <p>{errorCourses}</p>}
          {!loadingCourses &&
            !errorCourses &&
            courses &&
            courses.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-center mb-4">
                  Recent Courses
                </h2>
                <div className="flex flex-wrap gap-4">
                  {courses.slice(0, 6).map((course) => (
                    <CourseCard key={course._id} course={course} />
                  ))}
                </div>
                <Link
                  to="/course/:courseSlug"
                  className="text-lg text-teal-500 hover:underline text-center block mt-4"
                >
                  View all courses
                </Link>
              </div>
            )}
        </div>

        <div className="max-w-6xl mx-auto px-3 py-8">
          <Projects />
          <ReviewComponent />
        </div>
      </div>

      <FAQComponent />
    </div>
  );
}
