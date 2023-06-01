import React from 'react'
export default function FilmsPresentation({films}) {
     console.log(films);
    return (
     <div className='container'>
        {films.map((film)=>(
        <div className='column'>
        <div className='card'>
        <img src={film.img} alt=''/>
          <h3>{film.Title}</h3>
          <p className='title'>{film.Year}</p>
          <h4> {film.Nation}</h4>
        </div>
      </div>
     ))}</div>   
  )
}
