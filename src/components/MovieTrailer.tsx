import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { PlayIcon } from "lucide-react";
import { getMovieTrailerById } from "@/lib/Api/getMovieTrailerById";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

// 🎥 Trailer video-ийн structure тодорхойлох type
type Video = {
  id: string;
  name: string;
  key: string;
  site: string;
  type: string;
};

export const MovieTrailer = ({ movieId }: { movieId: number }) => {
  const [trailer, setTrailer] = useState<Video[]>([]);

  useEffect(() => {
    const getMovieTrailer = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieTrailerById(movieId);
        setTrailer(data.results || []);
      } catch (error) {
        console.error("Failed to fetch movie trailer:", error);
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
        <Button asChild className="absolute mt-10" variant="secondary">
          <span className="flex items-center gap-2">
            <PlayIcon /> Watch Trailer
          </span>
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
