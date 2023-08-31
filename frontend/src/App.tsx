import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./pages/home/Home";
import Trailer from "./pages/trailer/Trailer";
import Reviews from "./pages/reviews/Reviews";
import { MoviesType, ReviewType } from "./types/types";
import "./App.scss";

const App = () => {
  const [movies, setMovies] = useState<MoviesType[]>([]);
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  const getMovies = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/movies`);
      setMovies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/trailer/:ytTrailerId" element={<Trailer />} />
          <Route
            path="/reviews/:movieImdbId"
            element={<Reviews reviews={reviews} setReviews={setReviews} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
