import Styles from "@/app/posts.module.css";
import { componentsMap } from "@/comps/CoponentsMap";
import { supabase } from "@/supabase";
import { DateConverter } from "@/utils/functions";
import Link from "next/link";

import { use } from "react";

const BlogDisplayer = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const { data } = use(
    supabase
      .from("blogs")
      .select("title,date,post_ct,compsRequired")
      .eq("id", id)
      .single()
  );
  const RequiredComps = Array.isArray(data?.compsRequired)
    ? data.compsRequired.map((compName: string) => componentsMap[compName])
    : [];
  return (
    <article className="pt-24 px-5 major--section postDisplayComp mx-auto  mb-24">
      <h1 className="text-hxl leading-11 md:leading-16 lsp sm:text-5xl md:text-6xl fw-max inter--font">
        {data?.title}
      </h1>
      <div className="mt-3 inter--font text-md md:text-xl italic">
        <span className="text-gray-800 dark:text-gray-300">Written on </span>
        <span className="text-sm md:text-xl roboto">
          {DateConverter(data?.date)}
        </span>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data?.post_ct }}
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
          Found anything wrong or misguiding, email me!{" "}
        </span>
      </div>
    </article>
  );
};
export default BlogDisplayer;
