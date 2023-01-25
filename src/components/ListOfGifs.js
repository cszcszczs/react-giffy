import Gif from "./Gif";
import "./ListOfGifs.css";

function ListOfGifs({ gifs }) {
  return (
    <div className="ListOfGifs">
      {gifs.map(({ id, title, url, ...resOfGif }) => (
        <Gif id={id} key={id} title={title} url={url} extraInfo={resOfGif} />
      ))}
    </div>
  );
}

export default ListOfGifs;
