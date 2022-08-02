import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Row, Col, Card } from "react-bootstrap";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <Row className="justify-content-center mt-4">
      {movies.map((movie) => (
        <Col sm={4} className="">
          <Card className="mb-4" key={movie.id}>
            <Card.Body>
              <Card.Title>{movie.name}</Card.Title>
              <Card.Subtitle>{movie.price} /ticket</Card.Subtitle>
              <Card.Text className="mt-2">
                {movie.description.substring(0, 100)}...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
