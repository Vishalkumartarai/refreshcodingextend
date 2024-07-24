import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="group relative w-full border-4 border-slate-200 hover:border-indigo-800 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all duration-300 shadow-md hover:shadow-xl">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2 group-hover:text-indigo-800 transition-all duration-300">
          {post.title}
        </p>
        <span className="italic text-sm text-gray-700 group-hover:text-indigo-800 transition-all duration-300">
          {post.category}
        </span>
        <Link
          to={`/post/${post.slug}`}
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
        >
          Read article
        </Link>
      </div>
      <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
  );
}
