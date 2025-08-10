"use client";
import Link from "next/link";

const ErrorDisplayer = () => {
  return (
    <div className="min-h-full overflow-y-hidden   flex flex-col justify-center items-center">
      <div className="px-4">
        <div className="px-4 bg-errorRed sm:bg-white py-3 md:py-6 rounded-md  md:px-16 mt-36 ">
          <h2 className="text-4xl md:block roboto italic text-center md:mb-4 uppercase text-red-600">
            Error Ocurred!
          </h2>
          <p className="inter--font  sm:text-xl leading-relaxed text-center">
            An unexpected error ocurred. Check your internet connection. If it's
            good okay, else sorry for this stupid inconvinience.
          </p>
        </div>
        <p className="playfair text-2xl md:text-4xl text-coolblue mt-4 md:mt-2 text-center fw-max">
          BE thunderrous always
        </p>
      </div>
      <div className="mt-6">
        <Link href="/">
          <button className="px-4 py-2 bg-greenBtn text-white rounded-md">
            Retry
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ErrorDisplayer;
