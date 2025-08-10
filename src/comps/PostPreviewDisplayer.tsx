"use client";
import { postPreviews } from "@/types";
import { DateConverter } from "@/utils/functions";

import React from "react";
type postPreviewsPropType = {
  handleClick: (postId: string, e: React.MouseEvent) => void;
  postData: postPreviews;
};
const PostPreviewDisplayer: React.FC<postPreviewsPropType> = ({
  handleClick,
  postData,
}) => {
  const postId = postData.id;
  return (
    <button
      onClick={(e) => handleClick(postId, e)}
      className="inline-block w-full mb-2 cursor-pointer"
    >
      <div className="mb-2 md:mb-4  py-2 px-6 md:px-4 transition-all flex flex-col items-start  hover:bg-[#ddd] hover:dark:bg-[#212529] rounded-md">
        <h4 className="text-3xl text-left md:text-4xl  roboto mb-1 md:mb-2 fw-max">
          {postData.title}
        </h4>
        <span>{DateConverter(postData.date)}</span>
        <div className="pt-2">
          <p className="text-pforMobileSmall text-left inter-font">
            {postData.description}
          </p>
        </div>
      </div>
    </button>
  );
};
export default PostPreviewDisplayer;
