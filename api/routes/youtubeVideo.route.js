// import express from "express";
// import {
//   createYouTubeVideo,
//   getYouTubeVideos,
//   getYouTubeVideoById,
//   updateYouTubeVideoById,
//   deleteYouTubeVideoById,
// } from "../controllers/youtubeVideo.controller.js";

// const router = express.Router();

// router.post("/create", createYouTubeVideo);
// router.get("/getvideos", getYouTubeVideos);
// router.get("/getvideo/:id", getYouTubeVideoById);
// router.put("/updatevideo/:youtubeVideoId/:userId", updateYouTubeVideoById);
// router.delete("/deletevideo/:youtubeVideoId/:userId", deleteYouTubeVideoById);

// export default router;

import express from "express";
import {
  createYouTubeVideo,
  getYouTubeVideos,
  getYouTubeVideoById,
  updateYouTubeVideoById,
  deleteYouTubeVideoById,
} from "../controllers/youtubeVideo.controller.js";

const router = express.Router();

router.post("/create", createYouTubeVideo);
router.get("/getvideos", getYouTubeVideos);
router.get("/getvideo/:id", getYouTubeVideoById);
router.put("/updatevideo/:youtubeVideoId", updateYouTubeVideoById);
router.delete("/deletevideo/:youtubeVideoId", deleteYouTubeVideoById);

export default router;
