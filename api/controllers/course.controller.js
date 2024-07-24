import Course from "../models/course.model.js";
import errorHandler from "../utils/error.js";

// Create a new course
export const createCourse = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed to create a course"));
  }
  if (
    !req.body.heading ||
    !req.body.description ||
    !req.body.thumbnail ||
    !req.body.videoFile
  ) {
    return next(errorHandler(400, "Please provide all required fields"));
  }

  const slug = req.body.heading
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");

  const newCourse = new Course({
    ...req.body,
    slug,
    userId: req.user.id,
  });

  try {
    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    next(error);
  }
};

// Get courses
export const getCourses = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === "asc" ? 1 : -1;

    const courses = await Course.find({
      ...(req.query.userId && { userId: req.query.userId }),

      ...(req.query.courseId && { _id: req.query.courseId }),
      ...(req.query.searchTerm && {
        $or: [
          { heading: { $regex: req.query.searchTerm, $options: "i" } },
          { description: { $regex: req.query.searchTerm, $options: "i" } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalCourses = await Course.countDocuments();

    const now = new Date();
    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );
    const lastMonthCourses = await Course.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      courses,
      totalCourses,
      lastMonthCourses,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a course
export const deleteCourse = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to delete this course"));
  }
  try {
    await Course.findByIdAndDelete(req.params.courseId);
    res.status(200).json("The course has been deleted");
  } catch (error) {
    next(error);
  }
};

// Update a course
export const updateCourse = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to update this course"));
  }

  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.courseId,
      {
        $set: {
          heading: req.body.heading,
          description: req.body.description,
          thumbnail: req.body.thumbnail,
          videoFile: req.body.videoFile,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedCourse);
  } catch (error) {
    next(error);
  }
};

// Get course by heading
export const getCourseByHeading = async (req, res, next) => {
  try {
    const course = await Course.findOne({ heading: req.params.heading });
    if (!course) {
      return next(errorHandler(404, "Course not found"));
    }
    res.status(200).json(course);
  } catch (error) {
    next(error);
  }
};
