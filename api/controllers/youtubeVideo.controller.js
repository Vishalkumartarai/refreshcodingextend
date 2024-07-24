// import YouTubeVideo from "../models/youtubeVideo.model.js"; // Adjust the import path as needed

// // Create a new YouTube video
// export const createYouTubeVideo = async (req, res) => {
//   try {
//     const newVideo = new YouTubeVideo(req.body);
//     await newVideo.save();
//     res.status(201).json(newVideo);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Get a list of YouTube videos
// export const getYouTubeVideos = async (req, res) => {
//   try {
//     const videos = await YouTubeVideo.find();
//     res.status(200).json(videos);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get a single YouTube video by ID
// export const getYouTubeVideoById = async (req, res) => {
//   try {
//     const video = await YouTubeVideo.findById(req.params.id);
//     if (!video) return res.status(200).json({ message: "Video not found" });
//     res.status(200).json(video);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update a YouTube video by ID
// export const updateYouTubeVideoById = async (req, res) => {
//   try {
//     const video = await YouTubeVideo.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!video) return res.status(200).json({ message: "Video not found" });
//     res.status(200).json(video);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Delete a YouTube video by ID
// export const deleteYouTubeVideoById = async (req, res) => {
//   try {
//     const video = await YouTubeVideo.findByIdAndDelete({
//       _id: req.params.youtubeVideoId,
//     });
//     console.log(req);
//     if (!video) return res.status(200).json({ message: "Video not found" });
//     res.status(200).json({ message: "Video deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
import YouTubeVideo from "../models/youtubeVideo.model.js"; // Adjust the import path as needed

// Create a new YouTube video
export const createYouTubeVideo = async (req, res) => {
  try {
    const newVideo = new YouTubeVideo(req.body);
    await newVideo.save();
    res.status(201).json(newVideo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a list of YouTube videos
export const getYouTubeVideos = async (req, res) => {
  try {
    const videos = await YouTubeVideo.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single YouTube video by ID
export const getYouTubeVideoById = async (req, res) => {
  try {
    const video = await YouTubeVideo.findById(req.params.id);
    if (!video) return res.status(200).json({ message: "Video not found" });
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a YouTube video by ID
export const updateYouTubeVideoById = async (req, res) => {
  try {
    const video = await YouTubeVideo.findByIdAndUpdate(
      req.params.youtubeVideoId,
      req.body,
      { new: true }
    );
    if (!video) return res.status(200).json({ message: "Video not found" });
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a YouTube video by ID
export const deleteYouTubeVideoById = async (req, res) => {
  try {
    const video = await YouTubeVideo.findByIdAndDelete(
      req.params.youtubeVideoId
    );
    if (!video) return res.status(200).json({ message: "Video not found" });
    res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
