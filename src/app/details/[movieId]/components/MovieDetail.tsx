"use client";

import { DirectorName } from "@/Components/detailsName";
import { DetailButton } from "@/Components/IdDetails/detailsButton";
import { Frame } from "@/Components/IdDetails/Frame";
import { Title } from "@/Components/IdDetails/IdMovieTitle";
import { MovieTrailer } from "@/Components/MovieTrailer";
import { getMovieById } from "@/lib/Api/getMovieById";
import { MovieType } from "@/types";
import { useEffect, useState } from "react";
export const MovieDetail = ({ movieId }: { movieId: string }) => {
  const [movie, setMovie] = useState<MovieType | undefined>();

  useEffect(() => {
    const getMovie = async () => {
      if (!movieId) return;

      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        console.error("Failed to fetch movie:", error);
      }
    };

    getMovie();
  }, [movieId]);
  console.log(movie);

  return (
    <div className="container mx-auto overflow-hidden">
      <Title movie={movie} />
      <Frame movie={movie} />
      <DetailButton movie={movie} />
      <p className="text-gray-700 text-[16px] my-4">{movie?.overview}</p>
      <DirectorName movie={movie} />
    </div>
  );
};
