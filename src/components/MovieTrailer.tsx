import { PlayIcon } from "lucide-react";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";
import { getMovieTrailerById } from "@/lib/Api/getMovieTrailerById";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
export const MovieTrailer = ({ movieId }: { movieId: number }) => {
  const [trailer, setTrailer] = useState([]);
  useEffect(() => {
    const getMovieTrailer = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieTrailerById(movieId);
        setTrailer(data.results || []);
      } catch (error) {
        console.log("Failed to fetch movie trailer:", error);
      }
    };
    getMovieTrailer();
  }, [movieId]);
  const officialTrailer = trailer.find(
    (video) => video.name === "Official Trailer"
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="absolute mt-10" variant="secondary">
          <PlayIcon className="gap-2" /> Watch Trailer
        </Button>
      </DialogTrigger>
      <DialogTitle />
      <DialogContent className="sm:max-w-fit">
        {officialTrailer ? (
          <YouTube
            videoId={officialTrailer.key}
            opts={{
              height: "561",
              width: "997",
              playerVars: {
                autoplay: 1,
              },
            }}
          />
        ) : (
          <p className="text-sm text-gray-500">No official trailer found.</p>
        )}
      </DialogContent>
    </Dialog>
  );
};
