"use client";
import Link from "next/link";
import DarkModeToggleBtn from "./DarkModeToggleBtn";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="fixed w-full  dark:bg-darkModeBlack dark:text-white  bg-white">
      <div className="md:px-6 px-4 py-4 md:py-6 flex justify-start items-center">
        <Link href="/">
          <h3 className="md:text-3xl text-2xl boldonse font-bold dark:text-[#fff]  text-pink">
            Vverse
          </h3>
        </Link>
        <div className="ml-auto displayNone md:flex   pt-1 gap-4 pr-8">
          <Link href="/about">
            <button className="text-xl roboto nav--btn cursor-pointer  hover:bg-[#ddd] hover:dark:bg-[#212529]  ">
              About
            </button>
          </Link>
          <Link href="/blgs">
            <button className="text-xl cursor-pointer roboto nav--btn hover:bg-[#ddd]  hover:dark:bg-[#212529]  ">
              Blogs
            </button>
          </Link>
          <Link href="/contacts">
            {" "}
            <button className="text-xl cursor-pointer roboto nav--btn hover:bg-[#ddd]  hover:dark:bg-[#212529]  ">
              Contact
            </button>
          </Link>
          <div>
            <DarkModeToggleBtn />
          </div>
        </div>
        <div className=" block md:hidden ml-auto">
          {!isOpen ? (
            <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                className="fill-black dark:fill-white"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </button>
          ) : (
            <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                className="fill-black dark:fill-white"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          )}
        </div>
      </div>
      {isOpen && (
        <div className=" w-full h-screen flex flex-col mt-24 px-12 bg-white dark:bg-darkModeBlack  ">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <button className="text-xl px-6 roboto nav--btn  hover:bg-[#ddd] hover:dark:bg-[#212529]  ">
              About
            </button>
          </Link>
          <Link href="/blgs" onClick={() => setIsOpen(false)}>
            <button className="text-xl px-6 roboto nav--btn hover:bg-[#ddd]  hover:dark:bg-[#212529]  ">
              Blogs
            </button>
          </Link>
          <Link href="/contacts">
            {" "}
            <button className="text-xl cursor-pointer roboto nav--btn hover:bg-[#ddd]  hover:dark:bg-[#212529]  ">
              Contact
            </button>
          </Link>
          <div className="flex items-center px-2 gap-3">
            <div className="px-2">
              <DarkModeToggleBtn />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
