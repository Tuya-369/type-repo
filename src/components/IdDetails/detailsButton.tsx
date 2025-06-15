"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Movie } from "@/types";

export const DetailButton = ({ movie }: { movie: Movie }) => {
  const router = useRouter();

  const handleClick = (id: number, name: string) => {
    router.push(`/genre?id=${id}&name=${encodeURIComponent(name)}`);
  };

  return (
    <Button onClick={() => handleClick(movie.id, movie.name)}>
      Details
    </Button>
  );
};
