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

const defaultCoverImage = "/path/to/default-cover-image.jpg"; // Replace with your default image path

const CreateYouTubeVideo = () => {
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [coverImageUploadProgress, setCoverImageUploadProgress] =
    useState(null);
  const [uploadError, setUploadError] = useState(null);
  const [formData, setFormData] = useState({
    coverImage: defaultCoverImage,
    heading: "",
    description: "",
    youtubeLink: "", // YouTube link field remains in form data but is no longer required
  });

  const navigate = useNavigate();

  const handleCoverImageUpload = async () => {
    if (!coverImageFile) {
      setUploadError("Please select a cover image.");
      return;
    }

    setUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + "-" + coverImageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, coverImageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setCoverImageUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setUploadError("Cover image upload failed.");
        setCoverImageUploadProgress(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setCoverImageUploadProgress(null);
          setUploadError(null);
          setFormData((prevFormData) => ({
            ...prevFormData,
            coverImage: downloadURL,
          }));
        });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${VITE_BACKEND_URL}/api/youtube-videos/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setUploadError(data.message);
        return;
      }

      setUploadError(null);
      navigate(`/youtube-video/${data._id}`); // Assuming _id is returned from the backend
    } catch (error) {
      setUploadError("Something went wrong.");
      console.error(error);
    }
  };

  return (
    <main className="p-3 flex flex-col w-full mx-auto min-h-screen">
      <BackButton />
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        Create a YouTube Video
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
        <TextInput
          type="text"
          placeholder="YouTube Link" // No 'required' attribute here
          value={formData.youtubeLink}
          onChange={(e) =>
            setFormData({ ...formData, youtubeLink: e.target.value })
          }
        />
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center border-4 border-teal-500 border-dotted p-3">
            <FileInput
              type="file"
              accept="image/*"
              onChange={(e) => setCoverImageFile(e.target.files[0])}
            />
            <Button
              type="button"
              gradientDuoTone="purpleToBlue"
              size="sm"
              outline
              onClick={handleCoverImageUpload}
              disabled={coverImageUploadProgress}
            >
              {coverImageUploadProgress ? (
                <div className="w-16 h-16">
                  <Spinner size="xl" />
                  <div className="text-center">{coverImageUploadProgress}%</div>
                </div>
              ) : (
                "Upload Cover Image"
              )}
            </Button>
          </div>
          {formData.coverImage !== defaultCoverImage && (
            <img
              src={formData.coverImage}
              alt="cover image"
              className="w-full h-72 object-cover"
            />
          )}
        </div>
        {uploadError && <Alert color="failure">{uploadError}</Alert>}
        <Button type="submit" gradientDuoTone="purpleToPink">
          Create YouTube Video
        </Button>
      </form>
    </main>
  );
};

export default CreateYouTubeVideo;
