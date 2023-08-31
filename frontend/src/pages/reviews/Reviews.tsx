import { SetStateAction, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../../components/reviewForm/ReviewForm";
import { MoviesType, ReviewType } from "../../types/types";

const Reviews: React.FC<{
  reviews: ReviewType[];
  setReviews: React.Dispatch<SetStateAction<ReviewType[]>>;
}> = ({ reviews, setReviews }) => {
  const revText = useRef<HTMLTextAreaElement | null>(null);
  const [movie, setMovie] = useState<MoviesType>();
  const params = useParams();
  const movieImdbId = params.movieImdbId;

  const addReview = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (revText.current) {
      const rev = revText.current.value;

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/reviews`,
          { reviewBody: rev, imdbId: movieImdbId }
        );

        const newReview: ReviewType = {
          _id: res.data._id,
          body: rev,
        };

        const updatedReviews = [...reviews, newReview];
        setReviews(updatedReviews);

        revText.current.value = "";
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const getSingleMovie = async (movieImdbId: string) => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/movies/${movieImdbId}`
        );
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (movieImdbId) getSingleMovie(movieImdbId);
  }, [setReviews, movieImdbId]);

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" width='300px' height='500px' />
        </Col>
        <Col>
          <>
            <Row>
              <Col>
                <ReviewForm
                  handleSubmit={addReview}
                  revText={revText}
                  labelText="Write a Review?"
                  defaultValue=""
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
            {reviews.map((review) => (
              <div key={review._id}>
                <Row>
                  <Col>{review.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </div>
            ))}
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
