import ListOfGifs from "../../components/ListOfGifs";
import TrendingSearches from "../../components/TrendingSearches";
import { useGifs } from "../../hooks/useGifs";
import "./styles.css";
import SearchForm from "../../components/SearchForm";
import { Helmet } from "react-helmet";

function Home() {
  const { gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
        <link rel="canonical" href="#" />
      </Helmet>
      <SearchForm />

      <h3
        className="App-title"
        style={{ textAlign: "left", margin: "20px 0px" }}
      >
        Ultima busqueda
      </h3>
      <ListOfGifs gifs={gifs} />

      <ul className="list">
        <h3 className="App-title" style={{ marginBottom: "10px" }}>
          Tendencias
        </h3>
        <TrendingSearches />
      </ul>
    </>
  );
}

export default Home;
