import { Film } from "@/utils/interfaces"
import { MovieImage } from "../image"
import {MdPlayCircleOutline} from 'react-icons/md'

interface Props {
    film: Film
}

const TrendingHero = (props: Props) => {
  return (
    <div className="h-[300px] relative film justify-center bg-slate-800">
      {/* bg image */}
      <div className="absolute left-0 top-0 right-0 bottom-0">
        <MovieImage src="" alt=""></MovieImage>
      </div>
      {/* text */}
      <div className="flex flex-col items-start">
        <p className="text-xl max-w-[50%] truncate">{props.film.title}</p>
        <p className="text-xl line-clamp-3">{props.film.description}</p>
        <button className="px-3 py-1.5 flex item-center gap-3">
          <MdPlayCircleOutline size={18}/>
          <span>Play Trailers</span>
        </button>
      </div>
    </div>
  );
}

export default TrendingHero