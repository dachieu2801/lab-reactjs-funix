
import React from "react";
import './TypeHotels.css'

const typeHotels = [
  {
    "name": "Hotels",
    "count": 233,
    "image": "./images/type_1.webp"
  },
  {
    "name": "Apartments",
    "count": 2331,
    "image": "./images/type_2.jpg"
  },
  {
    "name": "Resorts",
    "count": 2331,
    "image": "./images/type_3.jpg"
  },
  {
    "name": "Villas",
    "count": 2331,
    "image": "./images/type_4.jpg"
  },
  {
    "name": "Cabins",
    "count": 2331,
    "image": "./images/type_5.jpg"
  }
]


function TypeHotels() {
  return (
    <div>
      <h3>Browse by property type</h3>
      <div className='container-typehotels'>
        {typeHotels.map(type => (
          <div className='' key={type['name']}>
            <img src={type['image']} alt={type['name']} width='100%' height='60%' />
            <h4>{type['name']}</h4>
            <div style={{fontSize:'0.91rem'}}>{`${type['count']} hotels`}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TypeHotels