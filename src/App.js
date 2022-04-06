import './App.css';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import MovieSearch from './components/MovieSearch';
import { useDispatch, useSelector } from "react-redux";
import { selectedMoviesCount } from "./store/movie/selectors";
import { deselectAll, selectedAll } from "./store/movie/slice";

function App() {
  const count = useSelector(selectedMoviesCount);
  const dispatch = useDispatch();
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
            <button onClick={() => dispatch(deselectAll())}>Deselect all</button>
            <button onClick={() => dispatch(selectedAll())}>Select all</button>
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
