const Article = () => {
  return (
    <article className="bg-white px-4  dark:bg-darkModeBlack text-pblack dark:text-white min-h-screen pt-20 md:pt-24 mb-24">
      <section className="major--section  md:mx-auto mx-0">
        <h1 className="text-3xl md:text-4xl text-gray-500 dark:text-gray-400 boldonse leading-relaxed">
          It's me{" "}
          <span
            style={{
              fontStyle: "oblique",
              borderBottom: "5px solid red",
            }}
            className="text-[#930505] dark:text-[#ffd60a]"
          >
            Vijendra
          </span>
        </h1>
        <div className="mt-6">
          <p className="  md:text-xl text-pforMobileSmall md:pnormal  leading-normal">
            I'm currently 21 year old pursuing my last year of CS engineering.{" "}
          </p>
          <p className="  md:text-xl mt-2 text-pforMobileSmall md:pnormal  leading-normal">
            I've been on a roll since I joined my engineering course which
            really is a fancy waste of time.
          </p>{" "}
          <p className="  md:text-xl mt-2 text-pforMobileSmall md:pnormal  leading-normal">
            I love studying about films, tech and reading musings.
          </p>
          <span className="text-xl md:text-2xl inter--font italic mt-4 md:mt-6 font-semibold inline-block">
            Below are the technologies I know
          </span>
        </div>
        <div className="mt-5  sm:flex grid grid-cont gap-3">
          <span
            title="React is my first JS framework crush btw"
            className="technology-tag inter--font bg-green-500 text-white"
          >
            Reactjs
          </span>
          <span
            title="I do love SSR"
            className="technology-tag text-center inter--font bg-black dark:bg-white dark:text-black text-white"
          >
            Nextjs
          </span>
          <span
            title="It's cool to master it"
            className="technology-tag inter--font bg-blue-400"
          >
            Typescript
          </span>
          <span
            title="The guy who is cool always"
            className="technology-tag inter--font bg-[#fff085] dark:bg-[#ffd60a] dark:text-black "
          >
            Javascript
          </span>
          <span
            title="It's cool BAAS"
            className="technology-tag inter--font bg-green-300 dark:bg-[#38b000]"
          >
            Supabase
          </span>
        </div>
      </section>
      <section className="major--section w-full md:mx-auto mx-0 mt-8 md:mt-12">
        <h1 className="text-2xl md:text-4xl text-gray-600 dark:text-gray-400 boldonse">
          What's up stranger??{" "}
        </h1>
        <div className="mt-7">
          <p className=" md:text-xl text-pforMobileSmall  md:pnormal leading-normal">
            I'm Vijendra, a student and somewhat passionate developer (I think
            I'm). I do have some cool and practical knowledge about the things I
            said above.
          </p>
          <p className=" mt-4 md:text-xl text-pforMobileSmall md:pnormal leading-normal">
            I don't really blog about something which is very bloggish. I do
            blog if I find that interesting to blog. This is like a blog but not
            a blog but still a blog. Some of the coolest people that exist in
            the world has got some blog and I thought that's very interesting
            and I wanted to blog since my PUC days.
          </p>
          <p className=" mt-4  text-pforMobileSmall md:text-xl  md:pnormal leading-normal">
            Don't you be worried about the chaos I'm gonna cause or am I the
            chaos you try to stop. Will there be a way to escape from this
            chaos. If yes, how can you escape from something you fear. Confront
            it and show it who you're and what you can do. Be thunderrous.
          </p>
        </div>
      </section>
    </article>
  );
};
export default Article;
