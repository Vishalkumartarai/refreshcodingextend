// dotenv.config();

// mongoose
//   .connect(import.meta.env.MONGO)
//   .then(() => {
//     console.log("MongoDb is connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const __dirname = path.resolve();

// const app = express();

// app.use(express.json());
// app.use(cookieParser());

// app.listen(3000, () => {
//   console.log("Server is running on port 3000!");
// });

// app.use("/api/user", userRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/post", postRoutes);
// app.use("/api/comment", commentRoutes);

// app.use(express.static(path.join(__dirname, "/client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error";
//   res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import courseRoutes from "./routes/course.route.js";
import youtubeVideoRoutes from "./routes/youtubeVideo.route.js";
import cookieParser from "cookie-parser";
import path from "path";
import cors from 'cors';



dotenv.config();

const app = express();


// Enable CORS for all origins (not recommended for production)
app.use(cors());

// Enable CORS for a specific origin
app.use(cors({
  origin: '*',  // Your frontend domain
credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));


app.use(express.json());
app.use(cookieParser());

const __dirname = path.resolve();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the process if the connection fails
  });

// Serve static files
app.use(express.static(path.join(__dirname, "/client/dist")));

// API routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/course", courseRoutes);

app.use("/api/youtube-videos", youtubeVideoRoutes);

// Fallback route for serving the frontend application
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client"));
});

// Error handler middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
