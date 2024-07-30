import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Select, TextInput } from "flowbite-react";
import PostCard from "../components/PostCard";
import BackButton from "../components/backButton";

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "uncategorized",
  });

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const sortFromUrl = urlParams.get("sort");
    const categoryFromUrl = urlParams.get("category");
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(
        `${process.env.VITE_BACKEND_URL}/api/post/getposts?${searchQuery}`
      );
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        setShowMore(data.posts.length === 9);
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSidebarData({ ...sidebarData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();
    urlParams.set("searchTerm", sidebarData.searchTerm);
    urlParams.set("sort", sidebarData.sort);
    urlParams.set("category", sidebarData.category);
    navigate(`/search?${urlParams.toString()}`);
  };

  const handleShowMore = async () => {
    const startIndex = posts.length;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const res = await fetch(
      `${process.env.VITE_BACKEND_URL}/api/post/getposts?${urlParams.toString()}`
    );
    if (!res.ok) {
      return;
    }
    const data = await res.json();
    setPosts([...posts, ...data.posts]);
    setShowMore(data.posts.length === 9);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <BackButton />
      <div className="p-4 md:p-7 border-b md:border-r md:min-h-screen border-gray-500 w-full md:w-1/3 lg:w-1/4 xl:w-1/5">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <label className="whitespace-nowrap font-semibold">
              Search Term:
            </label>
            <TextInput
              placeholder="Search..."
              id="searchTerm"
              type="text"
              value={sidebarData.searchTerm}
              onChange={handleChange}
              className="w-full md:w-auto"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <label className="font-semibold">Sort:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.sort}
              id="sort"
              className="w-full md:w-auto"
            >
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </Select>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <label className="font-semibold">Category:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.category}
              id="category"
              className="w-full md:w-auto"
            >
              <option value="uncategorized">Uncategorized</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="aws">AWS</option>
              <option value="docker">Docker</option>
              <option value="kubernetes">Kubernetes</option>
              <option value="angular">Angular</option>
              <option value="reactjs">React.js</option>
              <option value="nextjs">Next.js</option>
              <option value="javascript">JavaScript</option>
            </Select>
          </div>
          <Button type="submit" outline gradientDuoTone="purpleToPink">
            Apply Filters
          </Button>
        </form>
      </div>
      <div className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5">
          Posts results:
        </h1>
        <div className="p-4 md:p-7 flex flex-wrap gap-4">
          {!loading && posts.length === 0 && (
            <p className="text-xl text-gray-500">No posts found.</p>
          )}
          {loading && <p className="text-xl text-gray-500">Loading...</p>}
          {!loading &&
            posts &&
            posts.map((post) => <PostCard key={post._id} post={post} />)}
          {showMore && (
            <button
              onClick={handleShowMore}
              className="text-teal-500 text-lg hover:underline p-4 w-full"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Button, Select, TextInput } from "flowbite-react";
// import PostCard from "../components/PostCard";
// import CourseCard from "../components/CourseCard"; // Adjust the import path as needed

// export default function Search() {
//   const [sidebarData, setSidebarData] = useState({
//     searchTerm: "",
//     sort: "desc",
//     category: "uncategorized",
//   });

//   const [posts, setPosts] = useState([]);
//   const [loadingPosts, setLoadingPosts] = useState(false);
//   const [showMorePosts, setShowMorePosts] = useState(false);

//   const [courses, setCourses] = useState([]);
//   const [loadingCourses, setLoadingCourses] = useState(false);
//   const [showMoreCourses, setShowMoreCourses] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const searchTermFromUrl = urlParams.get("searchTerm");
//     const sortFromUrl = urlParams.get("sort");
//     const categoryFromUrl = urlParams.get("category");
//     if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
//       setSidebarData({
//         ...sidebarData,
//         searchTerm: searchTermFromUrl,
//         sort: sortFromUrl,
//         category: categoryFromUrl,
//       });
//     }

//     const fetchPosts = async () => {
//       setLoadingPosts(true);
//       const searchQuery = urlParams.toString();
//       const res = await fetch(`/api/post/getposts?${searchQuery}`);
//       if (!res.ok) {
//         setLoadingPosts(false);
//         return;
//       }
//       if (res.ok) {
//         const data = await res.json();
//         setPosts(data.posts);
//         setLoadingPosts(false);
//         setShowMorePosts(data.posts.length === 9);
//       }
//     };

//     const fetchCourses = async () => {
//       setLoadingCourses(true);
//       const searchQuery = urlParams.toString();
//       const res = await fetch(`/api/course/getcourses?${searchQuery}`);
//       if (!res.ok) {
//         setLoadingCourses(false);
//         return;
//       }
//       if (res.ok) {
//         const data = await res.json();
//         setCourses(data.courses);
//         setLoadingCourses(false);
//         setShowMoreCourses(data.courses.length === 9);
//       }
//     };

//     fetchPosts();
//     fetchCourses();
//   }, [location.search]);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setSidebarData({ ...sidebarData, [id]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams();
//     urlParams.set("searchTerm", sidebarData.searchTerm);
//     urlParams.set("sort", sidebarData.sort);
//     urlParams.set("category", sidebarData.category);
//     navigate(`/search?${urlParams.toString()}`);
//   };

//   const handleShowMorePosts = async () => {
//     const startIndex = posts.length;
//     const urlParams = new URLSearchParams(location.search);
//     urlParams.set("startIndex", startIndex);
//     const res = await fetch(`/api/post/getposts?${urlParams.toString()}`);
//     if (!res.ok) {
//       return;
//     }
//     const data = await res.json();
//     setPosts([...posts, ...data.posts]);
//     setShowMorePosts(data.posts.length === 9);
//   };

//   const handleShowMoreCourses = async () => {
//     const startIndex = courses.length;
//     const urlParams = new URLSearchParams(location.search);
//     urlParams.set("startIndex", startIndex);
//     const res = await fetch(`/api/course/getcourses?${urlParams.toString()}`);
//     if (!res.ok) {
//       return;
//     }
//     const data = await res.json();
//     setCourses([...courses, ...data.courses]);
//     setShowMoreCourses(data.courses.length === 9);
//   };

//   return (
//     <div className="flex flex-col md:flex-row">
//       <div className="p-4 md:p-7 border-b md:border-r md:min-h-screen border-gray-500 w-full md:w-1/3 lg:w-1/4 xl:w-1/5">
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//           <div className="flex flex-col md:flex-row items-center gap-4">
//             <label className="whitespace-nowrap font-semibold">
//               Search Term:
//             </label>
//             <TextInput
//               placeholder="Search..."
//               id="searchTerm"
//               type="text"
//               value={sidebarData.searchTerm}
//               onChange={handleChange}
//               className="w-full md:w-auto"
//             />
//           </div>
//           <div className="flex flex-col md:flex-row items-center gap-4">
//             <label className="font-semibold">Sort:</label>
//             <Select
//               onChange={handleChange}
//               value={sidebarData.sort}
//               id="sort"
//               className="w-full md:w-auto"
//             >
//               <option value="desc">Latest</option>
//               <option value="asc">Oldest</option>
//             </Select>
//           </div>
//           <div className="flex flex-col md:flex-row items-center gap-4">
//             <label className="font-semibold">Category:</label>
//             <Select
//               onChange={handleChange}
//               value={sidebarData.category}
//               id="category"
//               className="w-full md:w-auto"
//             >
//               <option value="uncategorized">Uncategorized</option>
//               <option value="java">Java</option>
//               <option value="python">Python</option>
//               <option value="aws">AWS</option>
//               <option value="docker">Docker</option>
//               <option value="kubernetes">Kubernetes</option>
//               <option value="angular">Angular</option>
//               <option value="reactjs">React.js</option>
//               <option value="nextjs">Next.js</option>
//               <option value="javascript">JavaScript</option>
//             </Select>
//           </div>
//           <Button type="submit" outline gradientDuoTone="purpleToPink">
//             Apply Filters
//           </Button>
//         </form>
//       </div>
//       <div className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5">
//         <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5">
//           Posts results:
//         </h1>
//         <div className="p-4 md:p-7 flex flex-wrap gap-4">
//           {!loadingPosts && posts.length === 0 && (
//             <p className="text-xl text-gray-500">No posts found.</p>
//           )}
//           {loadingPosts && <p className="text-xl text-gray-500">Loading...</p>}
//           {!loadingPosts &&
//             posts &&
//             posts.map((post) => <PostCard key={post._id} post={post} />)}
//           {showMorePosts && (
//             <button
//               onClick={handleShowMorePosts}
//               className="text-teal-500 text-lg hover:underline p-4 w-full"
//             >
//               Show More
//             </button>
//           )}
//         </div>
//         <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5">
//           Courses results:
//         </h1>
//         <div className="p-4 md:p-7 flex flex-wrap gap-4">
//           {!loadingCourses && courses.length === 0 && (
//             <p className="text-xl text-gray-500">No courses found.</p>
//           )}
//           {loadingCourses && (
//             <p className="text-xl text-gray-500">Loading...</p>
//           )}
//           {!loadingCourses &&
//             courses &&
//             courses.map((course) => (
//               <CourseCard key={course._id} course={course} />
//             ))}
//           {showMoreCourses && (
//             <button
//               onClick={handleShowMoreCourses}
//               className="text-teal-500 text-lg hover:underline p-4 w-full"
//             >
//               Show More
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
