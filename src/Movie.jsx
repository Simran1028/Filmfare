import React from 'react'
import { useGlobalContext } from './context';

const Movie = () => {
  const { movie } = useGlobalContext();
  return (
    <div>
      {movie.map((curMovie) => {
        return (
          <div>
            <h2>{curMovie.Title}</h2>
            <div>{curMovie.Poster}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Movie
