import React from 'react'
import { Films } from '../shared/ListofFilms'
export default function Film() {
    return (
        <div className='container'>
            {Films.map((film) => (
                <div className='column'>
                    <div className='card'>
                        <img src='{film.img} ' alt='' />
                        <h3>{film.Title}</h3>
                        <p className='info'>{film.Year}</p>
                        <p className='info'>{film.Nation}</p>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

