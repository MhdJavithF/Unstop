import React from 'react'
import userImg from "../assets/images/dp.png";
import "../Styles/Home.css";
import { Link } from 'react-router-dom';

const Home = () => {

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    localStorage.setItem('isAuthenticated', 'false');
    console.log('Local storage cleared & Logged out successfully');
  };

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
          <h3 className='name'>Michael Dam</h3>
          <p className='mail'>example@gmail.com</p>
          <p className='gender'>Female</p>

          <Link to={"/auth/login"} className="logout-btn">
            <button onClick={handleLogout}>Logout</button>
          </Link>
        </div>
      </div>
        

    </div>
  )
}

export default Home