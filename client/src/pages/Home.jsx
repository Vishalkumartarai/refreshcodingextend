// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import PostCard from "../components/PostCard";
// import CourseCard from "../components/CourseCard"; // Adjust the import path as needed
// import Projects from "./Projects";
// import YouTubeSlider from "../components/YoutubeSlider"; // Import the new component
// import FAQComponent from "../components/FAQComponent";
// import ReviewComponent from "../components/Review";
// import SupportComponent from "../components/SupportComponent";

// export default function Home() {
//   const [posts, setPosts] = useState([]);
//   const [loadingPosts, setLoadingPosts] = useState(true);
//   const [errorPosts, setErrorPosts] = useState(null);

//   const [courses, setCourses] = useState([]);
//   const [loadingCourses, setLoadingCourses] = useState(true);
//   const [errorCourses, setErrorCourses] = useState(null);

//   const [youtubeVideos, setYoutubeVideos] = useState([]);
//   const [loadingYoutubeVideos, setLoadingYoutubeVideos] = useState(true);
//   const [errorYoutubeVideos, setErrorYoutubeVideos] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await fetch("/api/post/getPosts");
//         const data = await res.json();
//         setPosts(data.posts);
//       } catch (err) {
//         setErrorPosts("Failed to fetch posts");
//       } finally {
//         setLoadingPosts(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch("/api/course/getcourses?limit=4");
//         const data = await res.json();
//         setCourses(data.courses);
//       } catch (err) {
//         setErrorCourses("Failed to fetch courses");
//       } finally {
//         setLoadingCourses(false);
//       }
//     };
//     fetchCourses();
//   }, []);

//   useEffect(() => {
//     const fetchYoutubeVideos = async () => {
//       try {
//         const res = await fetch("/api/youtube-videos/getvideos?limit=4");
//         const data = await res.json();

//         setYoutubeVideos(data);
//       } catch (err) {
//         setErrorYoutubeVideos("Failed to fetch YouTube videos");
//       } finally {
//         setLoadingYoutubeVideos(false);
//       }
//     };
//     fetchYoutubeVideos();
//   }, []);

//   // Helper function to wrap each letter in a span
//   const animateText = (text) => {
//     return text.split("").map((char, index) => (
//       <span
//         key={index}
//         className={`inline-block opacity-0 animate-letter-fade-in-loop ${
//           char === " " ? "mr-2" : ""
//         }`}
//         style={{ animationDelay: `${index * 0.1}s` }}
//       >
//         {char}
//       </span>
//     ));
//   };

//   return (
//     <div className="relative">
//       <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold lg:text-6xl">
//           {animateText("REFRESH CODING")}
//         </h1>
//         <p className="text-gray-500 text-xs sm:text-sm flex flex-wrap">
//           {animateText("Coding is FUTURE and TECHNOLOGY is the WORLD !!")}
//         </p>
//         <Link
//           to="/search"
//           className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
//         >
//           View all Blogs
//         </Link>
//       </div>
//       <div className="p-3 bg-slate-100 dark:bg-slate-700">
//         <Projects />
//         <ReviewComponent />
//       </div>
//       <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
//         {loadingPosts && <p>Loading posts...</p>}
//         {errorPosts && <p>{errorPosts}</p>}
//         {!loadingPosts && !errorPosts && posts && posts.length > 0 && (
//           <div className="flex flex-col gap-6">
//             <h2 className="text-2xl font-semibold text-center">Recent Blogs</h2>
//             <div className="flex flex-wrap gap-4">
//               {posts.slice(0, 4).map((post) => (
//                 <PostCard key={post._id} post={post} />
//               ))}
//             </div>
//             <Link
//               to={"/search"}
//               className="text-lg text-teal-500 hover:underline text-center"
//             >
//               View all Blogs
//             </Link>
//           </div>
//         )}
//       </div>
//       <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
//         {loadingCourses && <p>Loading courses...</p>}
//         {errorCourses && <p>{errorCourses}</p>}
//         {!loadingCourses && !errorCourses && courses && courses.length > 0 && (
//           <div className="flex flex-col gap-6">
//             <h2 className="text-2xl font-semibold text-center">
//               Recent Courses
//             </h2>
//             <div className="flex flex-wrap gap-4">
//               {courses.slice(0, 4).map((course) => (
//                 <CourseCard key={course._id} course={course} />
//               ))}
//             </div>
//             <Link
//               to={"/course/:courseSlug"}
//               className="text-lg text-teal-500 hover:underline text-center"
//             >
//               View all courses
//             </Link>
//           </div>
//         )}
//       </div>
//       <YouTubeSlider videos={youtubeVideos} />
//       <FAQComponent />
//       <SupportComponent />
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import CourseCard from "../components/CourseCard"; // Adjust the import path as needed
import Projects from "./Projects";
import YouTubeSlider from "../components/YoutubeSlider"; // Import the new component
import FAQComponent from "../components/FAQComponent";
import ReviewComponent from "../components/Review";
import SupportComponent from "../components/SupportComponent";

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
        const res = await fetch(`${process.env.VITE_BACKEND_URL}/api/post/getPosts`);
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
        const res = await fetch(`${process.env.VITE_BACKEND_URL}/api/course/getcourses?limit=4`);
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
        const res = await fetch(`${process.env.VITE_BACKEND_URL}/api/youtube-videos/getvideos?limit=4`);
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

  return (
    <div className="relative">
      <div className="flex flex-col gap-6 p-6 sm:p-28 px-3 max-w-6xl mx-auto w-full">
        <h1 className="text-3xl font-bold lg:text-6xl">
          {animateText("REFRESH CODING")}
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm flex flex-wrap">
          {animateText("Coding is FUTURE and TECHNOLOGY is the WORLD !!")}
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all Blogs
        </Link>
      </div>
      <div className="p-3 bg-slate-100 dark:bg-slate-700 w-full">
        <Projects />
        <ReviewComponent />
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7 w-full">
        {loadingPosts && <p>Loading posts...</p>}
        {errorPosts && <p>{errorPosts}</p>}
        {!loadingPosts && !errorPosts && posts && posts.length > 0 && (
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl font-semibold text-center">Recent Blogs</h2>
            <div className="flex flex-wrap gap-4 w-full">
              {posts.slice(0, 6).map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all Blogs
            </Link>
          </div>
        )}
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7 w-full">
        {loadingCourses && <p>Loading courses...</p>}
        {errorCourses && <p>{errorCourses}</p>}
        {!loadingCourses && !errorCourses && courses && courses.length > 0 && (
          <div className="flex flex-col gap-6 w-full">
            <h2 className="text-2xl font-semibold text-center">
              Recent Courses
            </h2>
            <div className="flex flex-wrap gap-4 w-full">
              {courses.slice(0, 6).map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
            <Link
              to={"/course/:courseSlug"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all courses
            </Link>
          </div>
        )}
      </div>
      <YouTubeSlider videos={youtubeVideos} />
      <FAQComponent />
      <SupportComponent />
    </div>
  );
}
