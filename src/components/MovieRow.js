import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { isMovieSelected } from "../store/movie/selectors";
import { toggleSelectMovie } from "../store/movie/slice";

const MovieRow = ({movie}) => {
  const dispatch = useDispatch();

  const isSelected = useSelector((state) => isMovieSelected(state, movie.id));
  return (
    <div>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => dispatch(toggleSelectMovie(movie.id))}
        />
        <p>Title: {movie.title}</p>
        <p>Director: {movie.director}</p>
        <img style={{width:"150px"}} className="img" src={movie.imageUrl} alt={movie.imageUrl}/>
        <p>Release date: {movie.releaseDate}</p>
        <p>Genre: {movie.genre}</p>
        <p>Duration: {movie.duration}</p>
    </div>
  )
}

export default MovieRow