import { DetailButton } from "@/app/Components/IdDetails/detailsButton";
import { DirectorName } from "@/app/Components/IdDetails/DetailsName";
import { Frame } from "@/app/Components/IdDetails/Frame";
import { Title } from "@/app/Components/IdDetails/IdMovieTitle";

export const Details = ({ movie }) => {
  return (
    <div className="px-[120px] max-w-[1440px] mx-auto mt-10">
      <Title movie={movie} />
      <Frame movie={movie} />
      <div className="my-6">
        <DetailButton movie={movie} />
        <p className="text-gray-700 text-[16px] my-4">{movie?.overview}</p>
        <DirectorName movie={movie} />
      </div>
      {/* <MoreMovie movie={movie} /> */}
    </div>
  );
};
