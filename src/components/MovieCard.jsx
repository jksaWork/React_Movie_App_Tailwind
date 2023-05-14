import { useDispatch } from "react-redux";
import PlayPauseCom from "./PlayPause";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { playPauseFun, setActiveSong } from "../redux/features/playerSlice";

function MovieCard({ movie }, isPlaying, activeSong) {
  // console.log(playPause);
  const handlePauseClick = () => {
    dispatch(playPauseFun(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ movie, data, i }));
    dispatch(playPauseFun(true));
  };

  const { titleText, primaryImage } = movie;
  console.log(movie);

  return (
    <div
      className="flex flex-col bg-white/5 
      p-2 w-[250px] bg-opacity-80 backdrop-blur-sm 
      cursor-pointer rounded-lg
      animate animate-slideup"
    >
      {/*  */}
      <div className="reltaive w-full h-56 group overflow-hidden">
        <div
          className={`absolute inset-0 
          justify-center items-center
          bg-black bg-opacity-50 group-hover:flex 
          
          ${
            setActiveSong?.title !== titleText.title
              ? "flex bg-opacity-80"
              : "hidden"
          }
          `}
        >
          <PlayPauseCom
            isPlaying={isPlaying}
            activeSong={activeSong}
            movie={movie}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={primaryImage?.url} alt="movie_image" class="object-contain" />
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-smiebold text-gray-300 mt-2">
          <Link to={`/songs/${movie.id}`}>
            {titleText.text}
            {/* Hello World */}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
