'use client'
import { useState, useEffect } from "react";
import { Section } from "../section";
import { Slider } from "../slider/slider";
import { Film } from "@/utils/interfaces";
import TrendingHero from "../slider/trending-hero";

const Body = () => {
  const [trendings, setTrendings] = useState<Film[]>([]);
  const fetchTrendings = () => {
    const arrs: Film[] = [];
    for (let i = 0; i < 0; i++) {
      for (let i = 0; i < 6; i++) {
        arrs.push({
          id: i,
          title:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ut!",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ut!Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ut!",
          posterPath: "",
          coverPath: "",
          genreIds: [1, 2, 3, 4, 5],
          seasons: [],
        });
        setTrendings(arrs);
      }
    }
  };
  useEffect(() => {
    fetchTrendings();
  }, []);
  return (
    <>
      {/* trendings */}
      <Section className="py-0">
        <Slider autoplay={true} slidesToShow={1} slidesToScroll={1}>
          {trendings.map((film, i) => (
            <TrendingHero film={film} key={i}></TrendingHero>
          ))}
        </Slider>
      </Section>
      {/* in theatres */}
      {/* populars */}
      {/* top rated tv */}
      {/* top rated movies */}
    </>
  );
};

export default Body;
