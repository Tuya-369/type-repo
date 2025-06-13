import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HeaderGenre } from "../../Components/HeaderGenre";
import { Moviecart } from "../../Components/MovieCard";
import { Pegnation } from "../../Components/Pegnation";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const Page = () => {
  const [genreMovies, setGenreMovie] = useState<MovieResponse | null>(null);
  const router = useRouter();
  const genreIds = router.query.genreIds as string | string[] | undefined;
  const genreName = router.query.name as string | undefined;

  const getMovieGenres = async () => {
    try {
      const formattedGenreIds = Array.isArray(genreIds)
        ? genreIds.join(",")
        : genreIds;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}discover/movie?language=en&with_genres=${formattedGenreIds}&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies: MovieResponse = await response.json();
      setGenreMovie(movies);
    } catch (error) {
      console.error("Failed to fetch genre movies:", error);
    }
  };

  useEffect(() => {
    if (genreIds) {
      getMovieGenres();
    }
  }, [genreIds]);

  return (
    <div>
      <HeaderGenre />
      <div className="max-w-[1280px] mx-auto px-4">
        <h2 className="text-2xl font-bold mt-8 mb-4">
          Genre: {genreName || "Loading..."}
        </h2>
        {genreMovies?.results?.length > 0 ? (
          <div className="flex flex-wrap gap-4 justify-start">
            {genreMovies.results.map((movie) => (
              <Moviecart key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p>No movies found for this genre.</p>
        )}
        <Pegnation />
      </div>
    </div>
  );
};

export default Page;
