import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";
import BackButton from "../components/backButton";
// Adjust the path to where BackButton.js is located
import Card from "../components/Card";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/post/getposts?`
        );
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/post/getposts?limit=3`
        );
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  return (
    <main className=" flex flex-col w-full mx-auto min-h-screen bg-main-background bg-white dark:bg-slate-700">
      <BackButton /> {/* Add the BackButton at the top */}
      <h1 className="text-2xl mt-6 p-3 text-center font-bold max-w-2xl mx-auto lg:text-3xl">
        {post && post.title}
      </h1>
      <Link
        to={`/search?category=${post && post.category}`}
        className="self-center mt-2"
      >
        <Button color="gray" pill size="xs">
          {post && post.category}
        </Button>
      </Link>
      <div className="flex justify-center mt-6">
        <img
          src={post && post.image}
          alt={post && post.title}
          className="w-[500px] h-[300px] object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-3xl text-sm">
        <span className="font-semibold">
          {post && new Date(post.createdAt).toLocaleDateString()}
        </span>
        <span className="italic font-semibold">
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div className="ml-5 mt-12 mx-auto w-full max-w-[50%] md:max-w-[800px] md:ml-4">
        {/* <Card content={post && post.content} /> */}
        <Card content={post && post.content} />
      </div>
      <CommentSection postId={post._id} />
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl font-bold mt-5">Recent articles</h1>
        <div className="flex flex-wrap gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}
