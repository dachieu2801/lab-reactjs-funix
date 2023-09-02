import React, { useState } from 'react';
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './DateRange.css'

function DateRanges(props) {
  const [isSalender, setIsSalender] = useState(false)
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])
  const handleSelect = (date) => {
    setDateRange([date.selection])
  }

  const handleClick = () => {
    setIsSalender(isSalender => !isSalender)
  }

  let startDate = dateRange[0].startDate
  let endDate = dateRange[0].endDate

  return (
    <div style={{ position: 'relative' }} >
      {props.icon && <i className='fa fa-calendar'></i>}
      <input
        onClick={handleClick}
        className='input-dateRange'
        style={{ height: props.height, paddingLeft: '6px'}}
        readOnly
        size={props.size}
        value={`${startDate.getMonth() + 1}/${startDate.getDate()}/${startDate.getFullYear()}  to  ${endDate.getMonth() + 1}/${endDate.getDate()}/${endDate.getFullYear()}`}
      />
      {
        isSalender &&
        <div className='dateRange'>
          <DateRange
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            className="date"
            minDate={new Date()}
            onChange={handleSelect}
            ranges={dateRange}
          />
        </div>
      }
    </div>
  )
}

export default DateRanges

