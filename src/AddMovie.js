import { useEffect, useState, useContext } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [movies, setMovies] = useContext(MovieContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      name: name,
      price: "$" + price,
      description: description,
    };
    setMovies([...movies, newMovie]);
    history.push("/");
  };

  return (
    <Container className="col-md-8 bg-light p-3 rounded-3 shadow-sm mt-4">
      <Form>
        <h2 className="fw-bold text-center">Add Movie</h2>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter movie name..."
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="price" className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter the price..."
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="description" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the description..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Row className="justify-content-center">
          <Button
            type="submit"
            variant="primary"
            className="col-md-2 shadow-sm"
            onClick={handleSubmit}
          >
            Add Movie
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default AddMovie;
