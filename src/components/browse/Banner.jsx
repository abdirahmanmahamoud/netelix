import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../../request";
import BASE_IMAGE_URL from "../../constants";
import { AiFillPlayCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../../atom/atom";
const Banner = () => {
  const [trending, setTrending] = useState([]);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setmovie] = useRecoilState(movieState);
  useEffect(() => {
    const fetchNetelixDripinals = async () => {
      const { data } = await axios.get(requests.fetchDocumantaries);
      setTrending(
        data.results[Math.floor(Math.random() * data.results.length)]
      );
    };
    fetchNetelixDripinals();
  }, []);
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute left-0 top-0 -z-10 h-[95vh] w-screen  ">
        <img
          src={`${
            BASE_IMAGE_URL + trending.backdrop_path || trending.poster_path
          }`}
          className="h-screen w-screen object-cover"
        />
      </div>
      <h1 className="text-2xl font-black md:text-4xl lg:text-6xl">
        {trending.title || trending.name || trending.original_name}
      </h1>
      <p className="max-w-xs text-sm md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {trending.overview}
      </p>
      <div className="flex items-center space-x-2">
        <button
          className="flex items-center rounded bg-white px-5 py-1 text-black transition hover:bg-gray-200 md:px-7 md:py-2 md:text-lg"
          onClick={() => {
            setShowModal(true);
            setmovie(trending);
          }}
        >
          <AiFillPlayCircle className="h-6 w-6" />
          Play
        </button>
        <button className="flex items-center rounded bg-[#5a7272] px-5 py-1 text-black transition hover:bg-[#71baba] md:px-7 md:py-2 md:text-lg">
          <AiOutlineInfoCircle className="h-6 w-6" />
          More info
        </button>
      </div>
    </div>
  );
};

export default Banner;
