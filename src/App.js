import AddMovie from "./AddMovie";
import "bootstrap/dist/css/bootstrap.min.css";
import { MovieProvider } from "./MovieContext";
import MovieList from "./MovieList";
import NavigationBar from "./Nav";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MovieProvider>
        <NavigationBar />
        <Container>
          <Route>
            <Switch>
              <Route exact path="/">
                <MovieList />
              </Route>
              <Route path="/add-movie">
                <AddMovie />
              </Route>
            </Switch>
          </Route>
        </Container>
      </MovieProvider>
    </Router>
  );
}

export default App;
