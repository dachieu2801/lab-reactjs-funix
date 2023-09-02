
import React from "react";
import './ListHotels.css'

const listHotels = [
  {
    "name": "Aparthotel Stare Miasto",
    "city": "Madrid",
    "price": 120,
    "rate": 8.9,
    "type": "Excellent",
    "image_url": "./images/hotel_1.webp"
  },
  {
    "name": "Comfort Suites Airport",
    "city": "Austin",
    "price": 140,
    "rate": 9.3,
    "type": "Exceptional",
    "image_url": "./images/hotel_2.jpg"
  },
  {
    "name": "Four Seasons Hotel",
    "city": "Lisbon",
    "price": 99,
    "rate": 8.8,
    "type": "Excellent",
    "image_url": "./images/hotel_3.jpg"
  },
  {
    "name": "Hilton Garden Inn",
    "city": "Berlin",
    "price": 105,
    "rate": 8.9,
    "type": "Excellent",
    "image_url": "./images/hotel_4.jpg"
  }
]


function ListHotels() {
  return (
    <div>
      <h3>Home guests love</h3>
      <div className='container-listhotels'>
        {listHotels.map(hotels => (
          <div className='' key={hotels['name']}>
            <img src={hotels['image_url']} alt={hotels['name']} width='100%' height='300px' />
            <a href='/detail'><b>{hotels['name']}</b></a>
            <p>{hotels['city']}</p>
            <p><b>Starting from ${hotels['price']}</b></p>
            <div>
              <span>{hotels['rate']}</span>
              <span>{hotels['type']}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListHotels