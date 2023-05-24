"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../Container";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { mergeClassName } from "@/utils/utils";
import { IoIosSearch } from "react-icons/io";

const MENU_CLASS = `
  p-1.5
  rounded-md
  hover:bg-primary
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

  const goToSearchPage = () => {
    if (keyword) {
      router.push(`/search?q=${keyword}`);
      setSearchFocus(false);
      searchRef.current?.blur();
    }
  };
  const initKeyword = () => {
    if (pathlocationRef.current === "/search") {
      setKeyword(searchparams.get("q") || "");
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
  }, [pathlocation]);

  useEffect(() => {
    window.addEventListener("click", () => onWindowClick());
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
          <div className="flex items-center gap-1.5 pt-0.5">
            <Link className={getMenuClass("/movies")} href="/movies">
              Movies
            </Link>
            <Link className={getMenuClass("/tv")} href="/tv">
              TV
            </Link>
          </div>
        </div>
        {/* search*/}
        <div className="border-b-[1.5px] border-white flex items-center flex-[0.5]">
          <input
          onClick={e => {
            e.stopPropagation()
            setSearchFocus(true)
          }}
          onKeyDown = {e => e.key === "Enter" ? goToSearchPage(): ""}
            onInput={(e) => setKeyword(e.currentTarget.value)}
            value={keyword}
            type="text"
            className="bg-transparent outline-0 flex-1 focus-within:border-primary"
            placeholder="search..."
          />
          <IoIosSearch size={18} />
        </div>
      </Container>
    </div>
  );
};

export default Header;
