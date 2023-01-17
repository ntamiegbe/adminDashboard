import React, { useState } from 'react'
import "./new.scss"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { DriveFolderUploadOutlined } from '@mui/icons-material'

const New = () => {
  const [file, setFile] = useState("")
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h2>Add new user</h2>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">Image: <DriveFolderUploadOutlined className='icon'/></label>
                <input type="file" id='file' onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Enter Username' />
              </div>
              <div className="formInput">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder='Enter Full Name' />
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter Email' />
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder='Enter Phone number' />
              </div>
              <div className="formInput">
                <label htmlFor="">Shipping Address</label>
                <input type="text" placeholder='Enter Address' />
              </div>
              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label htmlFor="">Confirm Password</label>
                <input type="password" />
              </div>
              <button type="submit">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New