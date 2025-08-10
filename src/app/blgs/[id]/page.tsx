import Styles from "@/app/posts.module.css";
import { supabase } from "@/supabase";
import { DateConverter } from "@/utils/functions";
import { use } from "react";
const BlogDisplayer = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const { data } = use(
    supabase.from("blogs").select("title,date,post_ct").eq("id", id).single()
  );

  return (
    <article className="pt-24 px-5 major--section postDisplayComp mx-auto">
      <h1 className="text-hxl leading-11 md:leading-20 lsp sm:text-5xl md:text-7xl fw-max inter--font">
        {data?.title}
      </h1>
      <div className="mt-3 inter--font text-md md:text-xl italic">
        <span className="text-gray-800 dark:text-gray-300">Written on </span>
        <span className="text-md roboto">{DateConverter(data?.date)}</span>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data?.post_ct }}
        className={`${Styles.postsStyles} mt-4 mb-24`}
      ></div>
    </article>
  );
};
export default BlogDisplayer;
