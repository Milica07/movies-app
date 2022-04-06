import './App.css';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import MovieSearch from './components/MovieSearch';
import { useSelector } from "react-redux";
import { selectedMoviesCount } from "./store/movie/selectors";

function App() {
  const count = useSelector(selectedMoviesCount);
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link className='navbar-brand' to='/movies'>Movies</Link>
            </li>
            <MovieSearch/>
            <li>
              <p>Selektovano je {count} filma</p>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/"><Redirect to="/movies" /></Route>
          <Route path='/movies'>
            <MovieList/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
