import debounce from "just-debounce-it";
import { useCallback, useEffect, useRef } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import Loader from "../../components/Loader";
import { useGifs } from "../../hooks/useGifs";
import useNearSecreen from "../../hooks/useNearScreen";
import { Helmet } from "react-helmet";
import SearchForm from "../../components/SearchForm";

function SearchResults({ params }) {
  const { keyword, rating = "g" } = params;
  const { loading, gifs, setPage } = useGifs({ keyword, rating });
  const externalRef = useRef();
  const { isNearScreen } = useNearSecreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = gifs
    ? `${gifs.length} reultados de  Resultados de ${keyword}`
    : "";

  /* const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
  }; */

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevState) => prevState + 1), 200),
    [setPage]
  );

  useEffect(
    function () {
      if (isNearScreen) debounceHandleNextPage();
    },
    [isNearScreen, debounceHandleNextPage]
  );

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
          </Helmet>
          <SearchForm initialKeyword={keyword} initialRating={rating} />
          <ListOfGifs gifs={gifs} />
        </>
      )}
      <div id="visor" ref={externalRef}></div>
    </>
  );
}

export default SearchResults;
