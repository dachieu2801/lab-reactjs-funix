import React, { useState } from "react";
import DateRanges from '../DateRange/DateRange';

import './Header.css'
function Header() {


  const clickSearch = () => {
    location.replace('/search');
  }


  return (
    <div style={{ position: 'relative' }} >

      <h2 className='title-header'>A lifetime of discounts? It's Genius.</h2>
      <div className='desc-header'>Get rewarded for your travals - unlock instant savings of 10% or more with a free account </div>
      <button className='btn-header'>Sign in / Registor</button>

      <div className='search-header'>
        <div>
          <i className='fa fa-bed'></i>
          <input id='place' type='text' placeholder='Where are you going?' />
        </div>
        <div>

          <DateRanges icon size='22' />
        </div>
        <div>
          <i className='fa fa-female'></i>
          <input id='noAdult' type='text' placeholder='1' />
          <label>adult  - </label>
          <input id='noAChildren' type='text' placeholder='0' />
          <label>hildren - </label>
          <input id='noRoom' type='text' placeholder='1' />
          <label>room</label>
        </div>
        <button onClick={clickSearch} className='btn-search'>Search</button>
      </div>

    </div>
  )
}

export default Header





