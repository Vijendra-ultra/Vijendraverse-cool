import Styles from "@/app/posts.module.css";
import { supabase } from "@/supabase";

import { DateConverter } from "@/utils/functions";

import Link from "next/link";

import { use } from "react";

const BlogDisplayer = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  //Await the prop before using it not the use hook
  const { data, error } = await supabase
    .from("blogs")
    .select("title,date,post_ct")
    .eq("id", id)
    .single();
  const html: string | undefined = data?.post_ct;
  return (
    <article className="pt-24 px-5 major--section postDisplayComp mx-auto  mb-24">
      {error && (
        <div>
          <h3 className="text-2xl md:text-4xl text-center">
            You the wanderer, why???
          </h3>
          <div>
            <p className="text-[14px] md:mt-6 md:text-[16px] text-center">
              You came to a blog that doesn't exist or something went wrong in
              oursides or was it that something wrong in your side???
            </p>
          </div>
        </div>
      )}
      {!error && (
        <>
          <h1 className="text-hxl leading-11 md:leading-16 lsp sm:text-5xl md:text-6xl fw-max inter--font">
            {data?.title}
          </h1>
          <div className="mt-3 inter--font text-md md:text-xl italic">
            <span className="text-gray-800 dark:text-gray-300">
              Written on{" "}
            </span>
            <span className="text-sm md:text-xl roboto">
              {DateConverter(data?.date)}
            </span>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: html ?? "" }}
            className={`${Styles.postsStyles} mt-4`}
          ></div>
          <div className="mt-6 md:mt-12 flex gap-3">
            <Link href="/blgs">
              <button className="px-3 py-2 dark:bg-white bg-black text-white dark:text-black inter--font rounded-md cursor-pointer font-bold">
                Goback
              </button>
            </Link>
            <Link href="/contacts">
              <button className="px-3 py-2 dark:bg-white dark:text-black  bg-black text-white inter--font rounded-md cursor-pointer font-bold">
                Contact
              </button>
            </Link>
          </div>
          <div className="mt-4 ">
            <span className="text-[#aaa]">
              Found something wrong or weird, email me!{" "}
            </span>
          </div>
        </>
      )}
    </article>
  );
};
export default BlogDisplayer;
