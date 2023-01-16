import React from 'react'
import "./single.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <div className="title">User Information</div>
            <div className="item">
              <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Ntami Egbe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">mail@mail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+234 800 0000 000</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Somewhere under the stars</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Single