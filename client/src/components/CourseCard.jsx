import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePlayVideo = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className={`p-4 border rounded-lg shadow-sm relative transition-all duration-500 ${
        isHovered
          ? "border-blue-500 shadow-lg"
          : "border-black dark:border-gray-300"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {course.thumbnail && (
        <img
          src={course.thumbnail}
          alt="Course Thumbnail"
          className="w-full h-48 object-cover rounded-lg"
        />
      )}
      <h2 className="text-xl font-semibold mt-4">{course.heading}</h2>
      <p className="text-gray-700 mt-2">{course.description}</p>
      <div className="flex justify-between items-center mt-4">
        <Button
          gradientDuoTone="purpleToBlue"
          size="sm"
          outline
          onClick={() => navigate(`/course/${course.slug}`)}
        >
          View Details
        </Button>
        {course.videoFile && isHovered && (
          <Button
            gradientDuoTone="greenToBlue"
            size="sm"
            outline
            className="absolute bottom-4 left-4"
            onClick={handlePlayVideo}
          >
            Play Video
          </Button>
        )}
      </div>
      {course.videoFile && (
        <Modal show={showModal} onClose={closeModal}>
          <Modal.Header>Course Video</Modal.Header>
          <Modal.Body>
            <video width="100%" controls>
              <source src={course.videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default CourseCard;
