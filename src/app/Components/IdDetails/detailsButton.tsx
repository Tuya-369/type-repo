// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/router";

// export const DetailButton = ({ movie }) => {
//   const router = useRouter();

//   const handleClick = (id, name) => {
//     router.push(`/genres?genreIds=${id}&name=${name}`);
//   };

//   return (
//     <div className="flex flex-wrap gap-2 mb-4">
//       {movie?.genres?.map((genre, index) => (
//         <Button
//           key={index}
//           className="h-8 px-4 text-xs text-text-foreground"
//           variant="outline"
//           onClick={() => handleClick(genre.id, genre.name)}
//         >
//           {genre.name}
//         </Button>
//       ))}
//     </div>
//   );
// };
