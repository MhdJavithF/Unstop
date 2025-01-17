import React from 'react'
import userImg from "../assets/images/dp.jpg";
import "../Styles/Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-wrapper'>
      <div className="content-wrapper">
        <div className="welcome-text">
                <p className='wel'>Welcome to</p>
                <p className='unstop'>Unstop</p>
        </div>

        <div className="user-wrapper">
          <div className="user-img">
            <img src={userImg} alt="user img" />
          </div>
          <p className='name'>Michael Dam</p>
          <p className='mail'>example@gmail.com</p>
          <p className='gender'>Female</p>

          <Link to={"/"} className="logout-btn">
            <button>Logout</button>
          </Link>
        </div>
      </div>
        

    </div>
  )
}

export default Home