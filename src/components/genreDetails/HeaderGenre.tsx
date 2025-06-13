import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { AllGenres } from "./allGenre";

export const HeaderGenre = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex border w-[97px] h-[36px] items-center gap-2 justify-center rounded-sm cursor-pointer bg-white text-sm">
        Genres
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-5 w-[577px]">
        <DropdownMenuSeparator className="my-4" />
        <DropdownMenuItem className="p-0 hover:!bg-transparent">
          <AllGenres />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
