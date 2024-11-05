import BgBanner from "../assets/banner.jpg";
function Banner() {
  return (
    <div className="relative">
      {/* Banner Image */}
      <img
        className="absolute z-10 top-1/2 left-1/2 md:mt-56 mt-64 transform border-8 -translate-x-1/2 -translate-y-1/2 md:w-9/12    h-96 border-[15px] border-gray-100"
        src={BgBanner}
        alt="Banner"
      />

      <div className="relative bg-green-200 h-[450px] space-y-2 text-center p-8 flex flex-col items-center">
        <h1 className="md:text-4xl ">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h1>
        <p>
          Explore the latest gadgets that will take your experience to <br />{" "}
          the next level. From smart devices to the coolest accessories, we have
          it all!
        </p>
        <button className="px-6 py-3 bg-green-500 text-white rounded-md shadow-lg hover:bg-green-700 transition-all duration-300">
          Show More
        </button>
      </div>
    </div>
  );
}

export default Banner;
