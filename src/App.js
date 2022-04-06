import './App.css';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link className='navbar-brand' to='/movies'>Movies</Link>
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
