import React from "react";
import PostInputs from "./FeedPage/PostInputs";
import Post from "./FeedPage/Post";

export default function PostFeed() {
  return (
    <div className="flex-grow max-w-2xl">
        <div className="py-4 px-3 text-lg sm:text-xl sticky top-0
        z-50 bg-white bg-opacity-80 backdrop-blur-sm font-bold">
            Home
        </div>
        <PostInputs />
        <Post/>
    </div>
  );
}