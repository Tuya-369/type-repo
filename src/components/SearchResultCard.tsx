import { Separator } from "@radix-ui/react-dropdown-menu";
import { ArrowRight, Star } from "lucide-react";
import { useRouter } from "next/router";

export const SearchResultCard = ({ movie, setSearchValue }) => {
  console.log("movieeee", movie);
  const { original_title, poster_path, popularity, release_date, id } = movie;
  const router = useRouter();

  const imgUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${poster_path}`;

  const handleSeemore = () => {
    router.push(`/details/${id}`);
    setSearchValue("");
  };

  return (
    <div>
      <div className="flex overflow-hidden shadow-md w-[537px] gap-4 p-2">
        <div>
          <img
            src={imgUrl}
            alt={original_title}
            className="w-[67px] h-[100px]"
          />
        </div>
        <div className="flex flex-col w-full gap-3">
          <p className="font-semibold">{original_title}</p>
          <p className="flex items-center text-sm">
            <Star className="text-yellow-300 fill-yellow-300 mr-1" size={16} />
            <span className="font-semibold">{popularity?.toFixed(1)}</span>
            <span className="ml-1 text-gray-900">/10</span>
          </p>
          <div className="flex justify-between w-full items-center">
            <p className="text-sm text-gray-700">{release_date}</p>
            <button
              onClick={handleSeemore}
              className="flex items-center gap-1 text-blue-600 hover:underline"
            >
              <ArrowRight size={16} />
              See more
            </button>
          </div>
        </div>
      </div>
      <Separator className="w-full mt-2" />
    </div>
  );
};
