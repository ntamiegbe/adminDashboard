import React from 'react'
import "./featured.scss"
import { MoreVert } from '@mui/icons-material'
import { CircularProgressbar } from 'react-circular-progressbar'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const percentage = 68

const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} />
        </div>
        <p className="title">Total sales for the day </p>
        <p className="amount">₦19,500</p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <ArrowDropDownIcon fontSize='small'/>
              <div className="resultAmount">₦35,000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <ArrowDropUpIcon fontSize='small'/>
              <div className="resultAmount">₦47,000</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <ArrowDropDownIcon fontSize='small'/>
              <div className="resultAmount">₦105,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured