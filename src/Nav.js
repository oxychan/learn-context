import { useContext } from "react";
import { MovieContext } from "./MovieContext";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Opik Movie</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/add-movie" className="nav-link">
            Add Movie
          </Link>
          <Nav.Link disabled>Total Movies : {movies.length}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
