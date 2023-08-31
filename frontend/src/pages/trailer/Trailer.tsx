import { useParams } from "react-router";
import ReactPlayer from "react-player";
import "./Trailer.scss";

const Trailer = () => {
  const params = useParams();
  const key = params.ytTrailerId;

  return (
    <div className="trailerContainer">
      {key && (
        <ReactPlayer
          controls={true}
          playing={true}
          url={`https://www.youtube.com/watch?v=${key}`}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

export default Trailer;
