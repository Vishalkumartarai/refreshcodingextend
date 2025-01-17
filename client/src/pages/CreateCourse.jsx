import React, { useState } from "react";
import { Button, Spinner, TextInput, FileInput, Alert } from "flowbite-react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase"; // Adjust the import path as needed
import { useNavigate } from "react-router-dom";
import BackButton from "../components/backButton";

const defaultCourseThumbnail = "./images/achv/2.png"; // Replace with your default image path

const CreateCourse = () => {
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailUploadProgress, setThumbnailUploadProgress] = useState(null);
  const [videoUploadProgress, setVideoUploadProgress] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const [formData, setFormData] = useState({
    thumbnail: defaultCourseThumbnail,
    heading: "",
    description: "",
    videoLink: "",
  });

  const navigate = useNavigate();

  const handleThumbnailUpload = async () => {
    if (!thumbnailFile) {
      setUploadError("Please select a thumbnail image.");
      return;
    }

    setUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + "-" + thumbnailFile.name;
    const storageRef = ref(storage, `thumbnails/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, thumbnailFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setThumbnailUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setUploadError("Thumbnail upload failed.");
        setThumbnailUploadProgress(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setThumbnailUploadProgress(null);
          setUploadError(null);
          setFormData((prevFormData) => ({
            ...prevFormData,
            thumbnail: downloadURL,
          }));
        });
      }
    );
  };

  const handleVideoFileUpload = async () => {
    if (!videoFile) {
      setUploadError("Please select a video file.");
      return;
    }

    setUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + "-" + videoFile.name;
    const storageRef = ref(storage, `videos/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, videoFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setVideoUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setUploadError("Video upload failed.");
        setVideoUploadProgress(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setVideoUploadProgress(null);
          setUploadError(null);
          setFormData((prevFormData) => ({
            ...prevFormData,
            videoLink: downloadURL,
          }));
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/course/create`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        setUploadError(data.message);
        return;
      }

      setUploadError(null);
      navigate(`/course/${data.slug}`); // Assuming slug is returned from the backend
    } catch (error) {
      setUploadError("Something went wrong.");
      console.error(error);
    }
  };

  return (
    <main className="p-3 flex flex-col w-full mx-auto min-h-screen">
      <BackButton />
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        Create a Course
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <TextInput
          type="text"
          placeholder="Heading"
          required
          value={formData.heading}
          onChange={(e) =>
            setFormData({ ...formData, heading: e.target.value })
          }
        />
        <TextInput
          type="text"
          placeholder="Description"
          required
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center border-4 border-teal-500 border-dotted p-3">
            <FileInput
              type="file"
              accept="image/*"
              onChange={(e) => setThumbnailFile(e.target.files[0])}
            />
            <Button
              type="button"
              gradientDuoTone="purpleToBlue"
              size="sm"
              outline
              onClick={handleThumbnailUpload}
              disabled={thumbnailUploadProgress !== null}
            >
              {thumbnailUploadProgress !== null ? (
                <div className="w-16 h-16">
                  <Spinner size="xl" />
                  <div className="text-center">{thumbnailUploadProgress}%</div>
                </div>
              ) : (
                "Upload Thumbnail"
              )}
            </Button>
          </div>
          {formData.thumbnail !== defaultCourseThumbnail && (
            <img
              src={formData.thumbnail}
              alt="thumbnail"
              className="w-full h-72 object-cover"
            />
          )}
          <div className="flex gap-4 items-center border-4 border-teal-500 border-dotted p-3">
            <FileInput
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files[0])}
            />
            <Button
              type="button"
              gradientDuoTone="purpleToBlue"
              size="sm"
              outline
              onClick={handleVideoFileUpload}
              disabled={videoUploadProgress !== null}
            >
              {videoUploadProgress !== null ? (
                <div className="w-16 h-16">
                  <Spinner size="xl" />
                  <div className="text-center">{videoUploadProgress}%</div>
                </div>
              ) : (
                "Upload Video File"
              )}
            </Button>
          </div>
          {formData.videoLink && (
            <video controls className="w-full h-72 mt-4">
              <source src={formData.videoLink} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        {uploadError && <Alert color="failure">{uploadError}</Alert>}
        <Button type="submit" gradientDuoTone="purpleToPink">
          Create Course
        </Button>
      </form>
    </main>
  );
};

export default CreateCourse;
