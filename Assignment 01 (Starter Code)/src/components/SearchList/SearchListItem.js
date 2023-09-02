import React from 'react';
import './SearchListItem.css'

function SearchListItem(props) {
  let item = props.items
  // console.log(item);
  return (
    <div className='container-SearchListItem'>
      <img src={item['image_url']} alt={item['name']} width='100%' height='100%' />
      <div>
        <h2>{item['name']}</h2>
        <p>{item['distance']} from center</p>
        <span className='tag-SearchListItem'>{item['tag']}</span>
        <p><b>{item['description']}</b></p>
        <p>{item['type']}</p>
        <div className='color-blue'>
          {item['free_cancel'] && <p><b>Free cancellation</b></p>}
          {item['free_cancel'] && <p>You can cancel later, so lock in this great price today!</p>}
        </div>
      </div>
      <div>
        <div className='rate-SearchListItem'>
          <h4>{item['rate_text']}</h4>
          <p>{item['rate']}</p>
        </div>
        <h3>${item['price']}</h3>
        <p style={{ opacity: '0.6', fontSize: '0.8rem', textAlign: 'end' }}>Includes taxes and fees</p>
        <button type='button'>See availability</button>
      </div>
    </div >
  )
}

export default SearchListItem

// "name": "Four Seasons Hotel",
// "distance": "100m",
// "tag": "Free Parking",
// "type": "1 bathroom • 51m² 2 full bed",
// "description": "Hotel in Lisbon",
// "free_cancel": false,
// "price": 99,
// "rate": 8.8,
// "rate_text": "Excellent",
// "image_url": "./images/hotel_search_3.jpg"