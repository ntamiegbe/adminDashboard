import SearchIcon from '@mui/icons-material/Search';
import "./navbar.scss"

import React from 'react'
import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="text">
          <h4>Welcome back, <span>Ntami</span></h4>
        </div>
        <div className="icons">
          <div className="search">
            <input type="text" placeholder="Search..." />
            <SearchIcon />
          </div>
          <div className="icon">
            <LanguageOutlined />
            English
          </div>
          <div className="icon">
            <DarkModeOutlined />
          </div>
          <div className="icon">
            <FullscreenExitOutlined />
          </div>
          <div className="icon">
            <NotificationsNoneOutlined />
            <div className="counter">6</div>
          </div>
          <div className="icon">
            <ChatBubbleOutlineOutlined />
            <div className="counter">2</div>
          </div>
          <div className="icon">
            <ListOutlined />
          </div>
          <div className="icon">
            <img src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='avatar'/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar