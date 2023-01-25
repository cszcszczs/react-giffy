import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import getTrendingTerms from "../services/getTrendingServices";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return (
    <>
      {trends.map((gif) => (
        <li key={gif}>
          <Link to={`/search/${gif}`}>{gif}</Link>
        </li>
      ))}
    </>
  );
}
