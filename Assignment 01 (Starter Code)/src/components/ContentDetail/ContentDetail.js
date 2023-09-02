import React from 'react';

import './ContentDetail.css'

const dataDetail = {
  "name": "Tower Street Apartments",
  "address": "Elton St 125 New york",
  "distance": "Excellent location - 500m from center",
  "price": "Book a stay over $114 at this property and get a free airport taxi",
  "photos": [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg"
  ],
  "title": "Stay in the heart of City",
  "description": "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  "nine_night_price": 955
}

function ContentDetail() {

  return (
    <div className='container-ContentDetail'>
      <div className='section-f-ContentDetail'>
        <div>
          <h2>{dataDetail['name']}</h2>
          <p><i className='fa fa-map-marker'></i> {dataDetail['address']}</p>
          <p style={{ fontSize: '1rem', color: '#0099ff' }}>{dataDetail['distance']} </p>
          <p style={{ fontSize: '1rem', color: ' rgb(5, 144, 26)' }}>{dataDetail['price']} </p>
        </div>
        <div>
          <button type='button'>Reserve or Book Now!  </button>
        </div>
      </div>
      <div className='section-photos-ContentDetail'>
        {dataDetail['photos'].map((photo, i) => (
          <img key={i} src={photo} width='100%' />
        ))}
      </div>
      <div className='section-e-ContentDetail'>
        <div>
          <h2>{dataDetail['title']}</h2>
          <p>{dataDetail['description']}</p>
        </div>
        <div className='inner-section-e-ContentDetail'>
          <p className='number-night-stay'>Perfect for a 9-night stay!</p>
          <p>Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with</p>
          <p className='price-ContentDetail'><b>${dataDetail['nine_night_price']}</b> (9 nights)</p>
          <button type='button'>Reserve or Book Now!</button>
        </div>
      </div>

    </div >
  )
}

export default ContentDetail