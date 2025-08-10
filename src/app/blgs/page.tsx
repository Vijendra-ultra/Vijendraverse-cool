"use client";
import ErrorDisplayer from "@/comps/ErrorDisplayer";
import { useRouter } from "next/navigation";
import LoadScreen from "@/comps/LoadScreener";
import PostPreviewDisplayer from "@/comps/PostPreviewDisplayer";
import { mainStore } from "@/store";
import { supabase } from "@/supabase";
import React, { useEffect, useState, useTransition } from "react";

const Blogs = () => {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [postLoading, setPostLoading] = useState<boolean>(false);
  const { blogsPreviews, setBlogsPreviews } = mainStore();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const handleClick = (postId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setPostLoading(true);
    startTransition(() => {
      router.push(`blgs/${postId}`);
    });
  };

  useEffect(() => {
    async function getPostPreviews() {
      const { data, error } = await supabase
        .from("blogs")
        .select("id,title,description,date");
      if (data) {
        setBlogsPreviews(data);
        setLoading(false);
      }
      if (error) {
        setError(true);
        setLoading(false);
      }
    }
    if (blogsPreviews.length === 0) {
      setLoading(true);
      getPostPreviews();
    } else {
      return;
    }
  }, [setBlogsPreviews, setError]);

  return (
    <div className="major--section mx-auto pt-20 pb-12 md:pt-28">
      {error && <ErrorDisplayer />}
      {loading && <LoadScreen message="Yarig gothu swami thumba husharu.." />}
      {postLoading && isPending && (
        <LoadScreen message="Cool madness is worth reading!" />
      )}
      {!error &&
        !postLoading &&
        blogsPreviews.map((postData) => (
          <PostPreviewDisplayer
            key={postData.id}
            handleClick={handleClick}
            postData={postData}
          />
        ))}
    </div>
  );
};
export default Blogs;
