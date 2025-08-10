"use client";
import { useEffect } from "react";

const DarkModeGetter = () => {
  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode === "dark") {
      console.log("I executed");
      document.documentElement.classList.add("dark");
      return;
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return null;
};
export default DarkModeGetter;
