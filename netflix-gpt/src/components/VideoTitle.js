

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video absolute mt-1 md:pt-[20%] px-6 md:px-24 text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold">{title}</h1>
      <p className="hidden xl:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:my-2 lg:my-0">
        <button className=" text-black bg-white hover:bg-opacity-80 py-1 px-3 md:py-2 md:px-4 lg:mt-2 xl:py-4 xl:px-10 lg:text-xl rounded-md">
          ▶ Play
        </button>
        <button className="hidden xl:inline-block mx-2 bg-gray-500 text-white p-4 px-10 text-xl opacity-50 rounded-md">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
