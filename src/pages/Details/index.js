import { Redirect } from "wouter";
import Gif from "../../components/Gif";
import Loader from "../../components/Loader";
import useSingleGif from "../../hooks/useSingleGif";
import { Helmet } from "react-helmet";

function Details({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });
  const title = gif ? gif.title : "";

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>

        <Loader />
      </>
    );
  }

  if (isError) return <Redirect to="/404" />;

  if (!gif) return null;

  return (
    <div className="main-gif">
      <Helmet>
        <title>{title} || Giffy </title>
      </Helmet>
      <h3 style={{ textAlign: "left" }}> {gif.title}</h3>
      <Gif {...gif} />
    </div>
  );
}

export default Details;
