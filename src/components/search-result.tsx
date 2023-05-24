import { Film } from "@/utils/interfaces";
import { useState } from "react";

const SearchResult = () => {
  const [items, setItems] = useState<Film[]>([]);
  const fetch = () => {
    const arrs: Film[] = [];
    for (let i = 0; i < 5; i++) {
      arrs.push({
        id: i,
        title: "",
        description: "",
        posterPath: "",
        coverPath: "",
        genreIds: [],
        seasons: [],
      });
    }
    setItems(arrs)
  };
  return (
    <div className="absolute top-[48px] left-0 right-0 rounded-md overflow-hidden">
        {
            items.map((film, i)=> (
                <div className="flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer">
                     {/* image  */}
                     {/* title and genre */}
                </div>
            ) )
        }
    </div>
  );
};

export default SearchResult;
