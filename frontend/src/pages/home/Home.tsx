import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import { MoviesType } from "../../types/types";

const Home: React.FC<{ movies: MoviesType[] }> = ({ movies }) => {
  return (
    <>
      <Header />
      <Hero movies={movies} />
    </>
  );
};

export default Home;
