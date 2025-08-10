import { create } from "zustand";
import { postPreviews } from "./types";

type mainStoreType = {
  blogsPreviews: [] | postPreviews[];
  setBlogsPreviews: (data: postPreviews[]) => void;
};

export const mainStore = create<mainStoreType>((set) => ({
  blogsPreviews: [],
  setBlogsPreviews: (data) => set({ blogsPreviews: data }),
}));
