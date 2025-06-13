import { MovieType } from "@/types";
import { MovieTrailer } from "../MovieTrailer";

export const Frame = ({ movie }: { movie: MovieType | undefined }) => {
  console.log(movie);

  return (
    <div className="relative my-4">
      <div className=" mt-70 absolute top-4 left-4 z-10">
        <MovieTrailer movieId={movie?.id} />
      </div>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        className="w-full max-h-[420px] object-cover rounded-lg shadow-md"
        alt={movie?.title}
      />
    </div>
  );
};
