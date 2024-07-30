import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CourseCard from "../components/CourseCard"; // Adjust the import path as needed

export default function CoursePage() {
  const { courseSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [course, setCourse] = useState(null);
  const [recentCourses, setRecentCourses] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${VITE_BACKEND_URL}/api/course/getcourse?slug=${courseSlug}`
        );
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setCourse(data.course);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCourse();
  }, [courseSlug]);

  useEffect(() => {
    try {
      const fetchRecentCourses = async () => {
        const res = await fetch(
          `${VITE_BACKEND_URL}/api/course/getcourses?limit=3`
        );
        const data = await res.json();
        if (res.ok) {
          setRecentCourses(data.courses);
        }
      };
      fetchRecentCourses();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handlePlayButtonClick = () => {
    if (course && course.videoFile) {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  return (
    <main className="p-3 flex flex-col w-full mx-auto min-h-screen">
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        {course && course.heading}
      </h1>
      <Link
        to={`/search?category=${course && course.category}`}
        className="self-center mt-5"
      >
        <Button color="gray" pill size="xs">
          {course && course.category}
        </Button>
      </Link>
      <img
        src={course && course.thumbnail}
        alt={course && course.heading}
        className="mt-10 p-3 max-h-[600px] w-full object-cover"
      />
      <div className="p-3 mx-auto w-full max-w-2xl text-xs border-b border-slate-500">
        <span>{course && new Date(course.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {course && (course.description.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className="p-3 mx-auto w-full max-w-2xl post-content"
        dangerouslySetInnerHTML={{ __html: course && course.description }}
      ></div>

      <div className="flex justify-center mt-5">
        {course && course.videoFile && (
          <Button onClick={handlePlayButtonClick} gradientDuoTone="cyanToBlue">
            Play Video
          </Button>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-4xl w-full">
            <h2 className="text-xl font-bold mb-4">Course Video</h2>
            <video width="100%" controls>
              <source src={course.videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Button onClick={closeModal} className="mt-4">
              Close
            </Button>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl mt-5">Recent Courses</h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {recentCourses &&
            recentCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
        </div>
      </div>
    </main>
  );
}
