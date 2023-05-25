"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../Container";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { mergeClassName } from "@/utils/utils";
import { IoIosSearch } from "react-icons/io";
import SearchResult from "../search-result";

const MENU_CLASS = `
  py-1 
  px-1.5
  p-1.5
  rounded-md
  hover:bg-primary
  mobile:px-6
`;
const MENU_CLASS_ACTIVE = `
  bg-primary
`;

const Header = () => {
  const [pathname, setPathName] = useState("");
  const pathlocation = usePathname();
  const router = useRouter();
  const searchparams = useSearchParams();
  const pathlocationRef = useRef("");
  const [keyword, setKeyword] = useState("");
  const [isSearchFocus, setSearchFocus] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const defaultKeyword = useRef("");

  const goToSearchPage = () => {
    if (keyword) {
      defaultKeyword.current = keyword;
      router.push(`/search?q=${keyword}`);
      setSearchFocus(false);
      searchRef.current?.blur();
    }
  };
  const initKeyword = () => {
    if (pathlocationRef.current === "/search") {
      setKeyword(defaultKeyword.current);
    } else {
      setKeyword("");
    }
  };
  const onWindowClick = () => {
    setSearchFocus(false);
    initKeyword();
  };

  const getMenuClass = (path: string) => {
    if (path === pathname) {
      return mergeClassName(MENU_CLASS, MENU_CLASS_ACTIVE);
    }
    return mergeClassName(MENU_CLASS, "");
  };
  useEffect(() => {
    setPathName(pathlocation);
    pathlocationRef.current = pathlocation;
    defaultKeyword.current = searchparams.get("q") || "";
  }, [pathlocation]);

  useEffect(() => {
    window.addEventListener("click", onWindowClick);
    return () => {
      window.removeEventListener("click", onWindowClick);
    };
  }, []);
  return (
    <div className="bg-header">
      <Container className="flex items-center justify-between">
        {/* brand and menu */}
        <div className="flex items-center flex-1 gap-6">
          {/* brand */}
          <h1 className="text-2xl font-semibold">
            <Link href="/">Sprimio</Link>
          </h1>
          {/* menu */}
          <div className="flex items-center gap-1.5 pt-1.5 mobile:fixed mobile:bottom-0 mobile:left-0 mobile:right-0 mobile:justify-center mobile:py-3 mobile:bg-header mobile:gap-6">
            <Link className={getMenuClass("/movies")} href="/movies">
              Movies
            </Link>
            <Link className={getMenuClass("/tv")} href="/tv">
              TV
            </Link>
          </div>
        </div>
        {/* search*/}
        <div className="border-b-[1.5px] border-white flex items-center flex-[0.5] relative">
          <input
            onClick={(e) => {
              e.stopPropagation();
              setSearchFocus(true);
            }}
            onKeyDown={(e) => (e.key === "Enter" ? goToSearchPage() : "")}
            onInput={(e) => setKeyword(e.currentTarget.value)}
            value={keyword}
            type="text"
            className="bg-transparent outline-0 flex-1 focus-within:border-primary"
            placeholder="search..."
          />
          <IoIosSearch size={18} />
          {/* top result */}
          {isSearchFocus ? (
            <SearchResult keyword={keyword} goToSearchPage={goToSearchPage} />
          ) : (
            ""
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
