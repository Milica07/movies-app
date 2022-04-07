import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "../store/movie/slice";
import { moviesSelector } from "../store/movie/selectors";


const MovieFilter = () => {
    const dispatch = useDispatch();
  return (
    <div>
        <button  onClick={()=>dispatch(setSortBy("nameAsc"))}>Name asc </button>
        <button  onClick={()=>dispatch(setSortBy("nameDesc"))} >Name desc </button>
        <button  onClick={()=>dispatch(setSortBy("durationAsc"))} >Duration asc</button>
        <button  onClick={()=>dispatch(setSortBy("durationDesc"))} >Duration desc </button>
    </div>
  )
}

export default MovieFilter