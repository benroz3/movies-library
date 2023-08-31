import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { MoviesType } from "../../types/types";
import "./Hero.scss";

const Hero: React.FC<{ movies: MoviesType[] }> = ({ movies }) => {
  return (
    <div className="carouselContainer">
      <Carousel>
        {movies.map((movie) => (
          <Paper key={movie.imdbId}>
            <div className="cardContainer">
              <div
                className="card"
                style={{
                  backgroundImage: `url(${movie.backdrops[0]})`,
                }}
              >
                <div className="details">
                  <div className="poster">
                    <img src={movie.poster} alt="" />
                  </div>
                  <div className="title">
                    <h4>{movie.title}</h4>
                  </div>
                  <div className="buttons">
                    <Link
                      to={`/trailer/${movie.trailerLink.substring(32)}`}
                      className="link"
                    >
                      <div className="play">
                        <FontAwesomeIcon
                          className="playIcon"
                          icon={faCirclePlay}
                        />
                      </div>
                    </Link>
                    <Link
                      to={`/reviews/${movie.imdbId}`}
                      className="link"
                      style={{ color: "white" }}
                    >
                      Reviews
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
