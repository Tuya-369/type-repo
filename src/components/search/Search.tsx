"use client";

import { cn } from "@/lib/utils";
import { SearchResult } from "./SearchResult";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

interface Movie {
  id: number;
  original_title: string;
  poster_path: string | null;
  popularity: number;
  release_date: string;
}

interface MovieResponse {
  results: Movie[];
}

export const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState<MovieResponse>({ results: [] });

  const SearchMovie = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/search/movie?query=${searchValue}&language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();
      setMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchValue.trim() !== "") {
        SearchMovie();
      } else {
        setMovies({ results: [] });
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchValue]);

  return (
    <div className="relative">
      <Input
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        type="text"
        placeholder="Search..."
        className={cn("pl-[38px] border-none shadow-none")}
      />
      {movies.results.length > 0 && searchValue.trim() !== "" && (
        <SearchResult movies={movies} setSearchValue={setSearchValue} />
      )}
    </div>
  );
};
