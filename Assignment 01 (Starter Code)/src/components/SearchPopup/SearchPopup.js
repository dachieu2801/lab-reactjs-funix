import React from "react";
import DateRanges from '../../components/DateRange/DateRange'

import './SearchPopup.css'

function SearchPopup(props) {

  return (
    <
    <div className='container-searchPopup'>
      <h2>Search</h2>
      <form>
        <div>
          <label>Destination</label><br />
          <input id='destination' type='text' />
        </div>
        <div >
          <label>Check-in Date</label><br />
          <DateRanges height='2.2rem'size='30' />
        </div>
        <div>
          <p>Optoins</p>
          <ul>
            <li><label>Min price per night </label><input size='10' id=' min-price' type='number' /></li>
            <li><label>Min price per night </label><input id='max-price' type='number' /></li>
            <li><label>Adult </label><input id='adult' type='number' /></li>
            <li><label>Children </label><input id='children' type='number' /></li>
            <li><label>Room </label><input id='room' type='number' /></li>
          </ul>
        </div>
        <button className='SearchPopup' type='button'> Search</button>
      </form>
    </div >
  )

}

export default SearchPopup