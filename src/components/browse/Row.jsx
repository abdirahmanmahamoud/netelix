import { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import BASE_IMAGE_URL from "../../constants";
import axios from "axios";

const Row = ({ title, url }) => {
  const [movie, setMovie] = useState([]);
  const [isScrall, setIsScrall] = useState(false);
  const rowRef = useRef(null);
  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(url);
      setMovie(data.results);
    };
    fetchMovie();
  }, []);
  const handleScrall = (direction) => {
    setIsScrall(true);
    if (rowRef.current) {
      const { clientWidth, scrollLeft } = rowRef.current;
      const scrollTo =
        direction == "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <div className="h-40">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="group relative md:ml-2">
        <BsChevronLeft
          onClick={() => handleScrall("left")}
          className={`${
            !isScrall && "hidden"
          } absolute bottom-0 left-2 top-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 hover:scale-125 group-hover:opacity-100`}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {movie &&
            movie.map((movie) => (
              <div
                key={movie.id}
                className="relative h-28 min-w-[180px] cursor-pointer md:h-36 md:min-w-[260px] md:hover:scale-105"
              >
                <img
                  src={`${
                    BASE_IMAGE_URL + movie.backdrop_path || movie.poster_path
                  }`}
                  className="rounded-sm object-cover"
                />
              </div>
            ))}
        </div>
        <BsChevronRight
          onClick={() => handleScrall("right")}
          className="absolute bottom-0 right-2 top-0 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 hover:scale-125 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default Row;
