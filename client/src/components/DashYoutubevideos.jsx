import React, { useEffect, useState } from "react";
import { Modal, Table, Button } from "flowbite-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import BackButton from "../components/backButton";

export default function DashYouTubeVideos() {
  const { currentUser } = useSelector((state) => state.user);
  const [videos, setVideos] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [videoIdToDelete, setVideoIdToDelete] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `/api/youtube-videos/getvideos?userId=${currentUser._id}`
        );
        const data = await res.json();

        if (res.ok) {
          setVideos(data || []); // Ensure videos is an array
          if ((data || []).length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
        setVideos([]); // Ensure videos is an array in case of error
      }
    };

    if (currentUser.isAdmin) {
      fetchVideos();
    }
  }, [currentUser]);

  const handleShowMore = async () => {
    const startIndex = videos.length;
    try {
      const res = await fetch(
        `/api/youtube-videos/getvideos?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        setVideos((prev) => [...prev, ...(data.videos || [])]); // Ensure videos is an array
        if ((data.videos || []).length < 100) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteVideo = async () => {
    setShowModal(false);
    try {
      const res = await fetch(
        `/api/youtube-videos/deletevideo/${videoIdToDelete}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setVideos((prev) =>
          prev.filter((video) => video._id !== videoIdToDelete)
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      <BackButton />
      {currentUser.isAdmin && videos.length > 0 ? (
        <>
          <Table hoverable className="shadow-md">
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Thumbnail</Table.HeadCell>
              <Table.HeadCell>Heading</Table.HeadCell>
              {/* <Table.HeadCell>Actions</Table.HeadCell> */}
              <Table.HeadCell>Delete</Table.HeadCell>
            </Table.Head>
            {videos.map((video) => (
              <Table.Body key={video._id} className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {new Date(video.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <img
                      src={video.coverImage}
                      alt={video.heading}
                      className="w-20 h-10 object-cover bg-gray-500"
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="font-medium text-gray-900 dark:text-white"
                      to={`/api/youtube-videos/${video._id}`}
                    >
                      {video.heading}
                    </Link>
                  </Table.Cell>

                  <Table.Cell>
                    <span
                      onClick={() => {
                        setShowModal(true);
                        setVideoIdToDelete(video._id);
                      }}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      Delete
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
          {showMore && (
            <button
              onClick={handleShowMore}
              className="w-full text-teal-500 self-center text-sm py-7"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p>You have no YouTube videos yet!</p>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this video?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteVideo}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
