import express from "express";
import {
  createCourse,
  getCourses,
  deleteCourse,
  updateCourse,
  getCourseByHeading,
} from "../controllers/course.controller.js";
import { verifyToken } from "../utils/verifyUser.js"; // Assuming you have some middleware for authentication

const router = express.Router();

// Create a new course
router.post("/create", verifyToken, createCourse);

// Get courses with optional query parameters
router.get("/", getCourses);

// Get a specific course by heading
router.get("/:heading", getCourseByHeading);

// Update a course by ID
router.put("/:courseId", verifyToken, updateCourse);

// Delete a course by ID
router.delete("/:courseId", verifyToken, deleteCourse);

export default router;
