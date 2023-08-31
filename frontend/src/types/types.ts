export interface MoviesType {
  _id: string;
  imdbId: string;
  title: string;
  releaseDate: String;
  poster: string;
  trailerLink: string;
  genres: string[];
  backdrops: string[];
  reviewIds: ReviewType[];
}

export interface ReviewType {
  _id: string;
  body: string;
}
