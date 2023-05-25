import { Film } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import { MovieImage } from "./image";
interface Props {
    keyword: string
    goToSearchPage: Function
}

const SearchResult = (props: Props) => {
  const [items, setItems] = useState<Film[]>([]);
  const [totalItems, setTotalItems] = useState(6)
  const fetch = () => {
    const arrs: Film[] = [];
    for (let i = 0; i < 6; i++) {
      arrs.push({
        id: i,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ut!",
        description: "",
        posterPath: "",
        coverPath: "",
        genreIds: [1, 2, 3, 4, 5,],
        seasons: [],
      });
    }
 
    setItems(arrs)
  };
     useEffect(() => {
         fetch()
     }, [props.keyword])
  return (
    <div className="absolute top-[48px] left-0 right-0 rounded-md overflow-hidden bg-header">
        {
            items.map((film, i)=> (
                <div key={i} className="flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer m-1.5">
                     {/* image  */}
                     <MovieImage src='' className="h-[72px] min-w-[102px] w-[102px] rounded-md" alt={"lorem"}/>
                     {/* title and genre */}
                    <div className="px-3 truncate">
                        <p className="text-base truncate">{film.title}</p>
                        <ul className="flex flex-wrap gap-x-1.5 text-sm opacity-{0.7]">
                    {film.genreIds.map((id)=> (
                        <li key={i}>item {i}</li>
                    ))}
                    </ul>
                    </div>
                </div>
            ) )
        }
        {totalItems > 5 ?
        <button 
        onClick={() => props.goToSearchPage()}
        className="px-3 py-1.5 bg-primary w-full hover:text-body">More results
        </button>: ''}
    </div>
  );
};

export default SearchResult;
