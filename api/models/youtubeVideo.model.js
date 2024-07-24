import mongoose from "mongoose";

const youtubeVideoSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String, // URL to the cover image
      required: true,
    },
    youtubeLink: {
      type: String,
      required: false, // Changed from 'required: true' to 'required: false'
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

const YouTubeVideo = mongoose.model("YouTubeVideo", youtubeVideoSchema);

export default YouTubeVideo;
