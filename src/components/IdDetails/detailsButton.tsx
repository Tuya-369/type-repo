import { Button } from "@/components/ui/button";
import { MovieType } from "@/types";
import { useRouter } from "next/router";

export const DetailButton = ({ movie }: { movie: MovieType }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {movie?.genres?.map((genre, index) => (
        <Button
          key={index}
          className="h-8 px-4 text-xs text-text-foreground"
          variant="outline"
          onClick={() => handleClick(genre.id, genre.name)}
        >
          {genre.name}
        </Button>
      ))}
    </div>
  );
};
