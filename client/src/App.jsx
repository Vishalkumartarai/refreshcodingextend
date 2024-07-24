import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";
import "flowbite/dist/flowbite.css";
import "tailwindcss/tailwind.css";
import CreateCourse from "./pages/CreateCourse";
import Contact from "./pages/Contact";
import ThemeToggleButton from "./components/ThemeToggle";
import ContactButton from "./components/ContactButton";
import AllButton from "./components/AllButton";
import CoursePage from "./pages/CoursePage";
import CreateYouTubeVideo from "./pages/CreateYoutubeVideo";

export default function App() {
  return (
    <BrowserRouter>
      <AllButton />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />

          <Route path="/create-course" element={<CreateCourse />} />
          <Route
            path="/create-youtube-video"
            element={<CreateYouTubeVideo />}
          />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>

        <Route path="/projects" element={<Projects />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
        <Route path="/course/:courseSlug" element={<CoursePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
