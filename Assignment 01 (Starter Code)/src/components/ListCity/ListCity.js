 import React from "react";

import './ListCity.css'

const listCity = [
  {
    "name": "Dublin",
    "subText": "123 properties",
    "image": "./images/city_1.webp"
  },
  {
    "name": "Reno",
    "subText": "533 properties",
    "image": "./images/city_2.webp"
  },
  {
    "name": "Austin",
    "subText": "532 properties",
    "image": "./images/city_3.webp"
  },
  // {
  //   "name": "Reno",
  //   "subText": "533 properties",
  //   "image": "./images/city_2.webp"
  // },
]



function ListCity() {
  return (
    <div className='listcity'>
      {listCity.map(city => (
        <div className='img-listcity' key={city['name']} style={{ background: `url(${city['image']}) center` }} >
          <div className='infor-city'>
            <h1>{city['name']}</h1>
            <h2>{city['subText']}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}


export default ListCity;