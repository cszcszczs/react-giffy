import React from "react";
import useNearSecreen from "../hooks/useNearScreen";
import Loader from "./Loader";

const TrendingSearches = React.lazy(() => import("./TrendingSearchesLlamada"));

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearSecreen({ distance: "200px" });

  return (
    <div className="list-div-container" ref={fromRef}>
      {isNearScreen ? <TrendingSearches /> : <Loader />}
    </div>
  );
}
