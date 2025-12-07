export const metadata = {
  title: "Here's how you could contact Vijendra",
};
const Contacts = () => {
  return (
    <article className="md:pt-24 pt-20 overflow-x-hidden min-h-screen bg-white dark:bg-[#0a0908] dark:text-white">
      <section className="major--section px-4 mx-auto ">
        <div className="mt-4">
          <div className="flex gap-2 ">
            <span className="pnormal md:text-xl italic text-gray-600 text-pforMobileSmall leading-normal">
              Mail:
            </span>
            <a
              type="email"
              target="_blank"
              href="mailto:vijendravasre66@gmail.com"
              title="Blogger's email"
              className="pnormal md:text-xl text-pforMobileSmall underline  hover:text-pink leading-normal"
            >
              vijendravasre66@gmail.com
            </a>
          </div>
          <div className="flex gap-2 mt-2 ">
            <span className="pnormal  md:text-xl italic text-gray-600  text-pforMobileSmall leading-normal">
              Github:
            </span>{" "}
            <a
              href="https://github.com/Vijendra-ultra"
              target="_blank"
              title="Blogger's github profile"
              className="pnormal md:text-xl text-pforMobileSmall underline  hover:text-pink leading-normal"
            >
              Vijendra-ultra
            </a>
          </div>
          <div className="flex gap-2 mt-2 "></div>
        </div>
      </section>
    </article>
  );
};
export default Contacts;
