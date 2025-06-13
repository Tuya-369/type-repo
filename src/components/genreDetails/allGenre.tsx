import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
}

export const AllGenres = () => {
  const router = useRouter();
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genreIds, setGenreIds] = useState<number[]>([]);

  const getMovieGenres = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}genre/movie/list?language=en`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      setGenres(data.genres || []);
    } catch (error) {
      console.error("Failed to fetch genres:", error);
    }
  };
  useEffect(() => {
    getMovieGenres();
  }, []);
  const handleSelectGenre = (id: number, name: string) => {
    const updatedIds = [...new Set([...genreIds, id])];
    setGenreIds(updatedIds);
    router.push(`/genres?genreIds=${updatedIds.join(",")}&name=${name}`);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {genres.map((genre) => (
        <Badge
          key={genre.id}
          className="bg-white text-foreground text-[12px] font-semibold border hover:bg-gray-100 cursor-pointer"
          onClick={() => handleSelectGenre(genre.id, genre.name)}
        >
          {genre.name}
        </Badge>
      ))}
    </div>
  );
};
