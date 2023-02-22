"use client";

import { usePreview } from "../lib/sanity.preview";
import BlogList from "./BlogList";


export default function PreviewBlogList({ query }) {
  const posts = usePreview(null, query);
  console.log("LOADING posts...", posts);
  return <BlogList posts={posts} />;
}