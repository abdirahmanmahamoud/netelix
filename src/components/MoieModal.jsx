import { Modal } from "@mui/material";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atom/atom";
import ReactPlayer from "react-player";
import { FaPause, FaPlay, FaPlus } from "react-icons/fa";
import { HiOutlineVolumeOff, HiOutlineVolumeUp } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

const MoieModal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setmovie] = useRecoilState(movieState);
  const [key, setkey] = useState("");
  const [isPlaying, setisPlaying] = useState(true);
  const [ismuted, setismuted] = useState(false);
  const [genres, setGenres] = useState(null);

  const handleClose = () => {
    setShowModal(false);
    setmovie(null);
  };

  useEffect(() => {
    const fetchTrailers = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&append_to_response=videos`
      );
      setGenres(data?.genres);
      setkey(data?.videos.results[0].key);
    };
    fetchTrailers();
  }, [movie]);
  return (
    <Modal
      className="fixed !top-7 left-4 right-0 z-50 mx-auto w-full max-w-5xl rounded-md"
      open={showModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <div className="relative pt-[56.24%]">
          <ReactPlayer
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
            url={`https://youtu.be/${key}`}
            playing={isPlaying}
            muted={ismuted}
          />
          <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
            <div className="flex space-x-2">
              <button className="tra nsition flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black hover:bg-[#e6e6e6]">
                {isPlaying ? (
                  <FaPause
                    onClick={() => setisPlaying(false)}
                    className="h-7 w-7 text-black"
                  />
                ) : (
                  <FaPlay
                    onClick={() => setisPlaying(true)}
                    className="h-7 w-7 text-black"
                  />
                )}
              </button>
              <button className="modal-btn">
                <FaPlus className="h-7 w-7" />
              </button>
              <button className="modal-btn">
                <AiFillLike className="h-6 w-6" />
              </button>
            </div>
            <div>
              <button className="modal-btn">
                {ismuted ? (
                  <HiOutlineVolumeOff
                    onClick={() => setismuted(false)}
                    className="h-10 w-10"
                  />
                ) : (
                  <HiOutlineVolumeUp
                    onClick={() => setismuted(true)}
                    className="h-10 w-10"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-6 rounded-b-md bg-[#181818] px-10 py-8">
          <div className="space-y-6 text-lg">
            <div className="flex items-center space-x-2">
              <p className="font-semibold text-green-400">
                {movie?.vote_average * 10} % Match
              </p>
              <p className="font-light">
                {movie?.release_date || movie?.first_air_date}
              </p>
              <div className="flex h-4 items-center justify-center rounded  border border-white/40 px-1.5 text-xs">
                HD
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-x-10 gap-y-4 font-light">
            <p className="w-5/6">{movie?.overview}</p>
            <div className="flex flex-col space-y-3 text-sm">
              <span className="text-gray-400">Genres :</span>
              {genres?.map((genre) => genre.name).join(", ")}
            </div>
            <div>
              <span className="text-gray-400">Original Language :</span>
              {movie?.original_language}
            </div>
            <div>
              <span className="text-gray-400">Total Votes :</span>
              {movie?.vote_count}
            </div>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default MoieModal;
