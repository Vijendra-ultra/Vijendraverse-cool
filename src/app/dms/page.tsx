const Page = () => {
  return (
    <div className="pt-24 pb-24 min-h-full">
      <div className="flex flex-col justify-center">
        <div className="mt-6 bg-green-300">
          <h2 className="text-3xl text-center">6</h2>
          <img src="6.jpg"></img>
        </div>
        <div className="mt-6 bg-red-300">
          <h2 className="text-3xl text-center">7</h2>
          <div className="mx-auto">
            <img className="block" src="7.jpg"></img>
          </div>
        </div>
        <div className="mt-6 bg-purple-300">
          <h2 className="text-3xl text-center">8</h2>
          <img src="8.jpg"></img>
        </div>
        <div className="mt-6 bg-amber-400">
          <h2 className="text-3xl text-center">9</h2>
          <img src="9.jpg"></img>
        </div>
      </div>
    </div>
  );
};
export default Page;
