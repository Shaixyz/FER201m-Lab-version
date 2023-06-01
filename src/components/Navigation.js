import React, { Component } from 'react'
import {HiSearch} from 'react-icons/hi'
export default class Navigation extends Component {
    render() {
       
        return (
          <nav className= 'navBarColor'>
            <div className='nav-options'>
                <h1> REACTFLIX</h1>
                <span>Movies</span>
                <span >Tv Shows</span>
                <span >Trending</span>
                <span >Pricing</span>
                
            </div>
            <div className="input-group">
            <input type='text' placeholder='Search'/>
         <HiSearch fontSize={25}color='green' id='search'/>
        
         </div>
          </nav>
        )
        }   
}
