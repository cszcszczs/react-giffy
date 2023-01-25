import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

export function useGifs({ keyword, rating } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setloadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  //recuperar keyword del localstorage
  const keywordToUse =
    keyword || localStorage.getItem("lastKeyword") || "random";

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse, rating }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      //guardamos la keyword del localstorage
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword, setGifs, keywordToUse, rating]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setloadingNextPage(true);

    getGifs({ keyword: keywordToUse, rating, page }).then((nextGif) => {
      setGifs((prevGifs) => prevGifs.concat(nextGif));
      setloadingNextPage(false);
    });
  }, [page, keywordToUse, setGifs, rating]);

  return { loading, loadingNextPage, gifs, setPage };
}
