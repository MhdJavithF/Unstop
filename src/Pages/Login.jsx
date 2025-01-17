import React from 'react';
import logImg from "../assets/images/Illustration.png";
import googleIcon from "../assets/icons/Frame 1116607310.png";
import facebookIcon from "../assets/icons/Vector.png";
import accIcon from "../assets/icons/account_circle.png";
import mailIcon from "../assets/icons/mail.png";
import keyIcon from "../assets/icons/key.png";
import eyeIcon from "../assets/icons/visibility.png";
import "../Styles/Login.css";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className='page-wrapper'>
        <div className='left-sec'>
            <img src={logImg} alt="banner img" />
        </div>

        <div className='right-sec'>
            <div className="welcome-text">
                <h2>Welcome to <span>Unstop</span></h2>
            </div>

            <div className="login-actions">
                <div className="google">
                    <button>
                        <img src={googleIcon} alt="google icon" />
                        <p>Login with Google</p>
                    </button>
                </div>
                <div className="facebook">
                    <button>
                        <img src={facebookIcon} alt="facebook icon" />
                        <p>Login with facebook</p>
                    </button>
                </div>
            </div>
            
            <div className='or-sec'>
                <div className='line'></div>
                <div className="or">or</div>
                <div className='line'></div>
            </div>

            <div className="manual-sign">
                <div className="in-wrapper">
                    <div className="acc">
                        <img src={accIcon} alt="acc circle icon" />
                    </div>
                    <div className="name">
                        <label>username</label>
                        <input type="text" placeholder="username"/>
                    </div> 
                </div>
                 

                <div className="in-wrapper">
                    <div className="mail">
                        <img src={mailIcon} alt="mail icon" />
                    </div>
                    <div className="name">
                        <label>Email</label>
                        <input type="mail" placeholder="username@gmail.com"/>
                    </div> 
                </div>
                
                
                <div className="in-wrapper">
                    <div className="key">
                        <img src={keyIcon} alt="key icon" />
                    </div>
                    <div className="name">
                        <label>Password</label>
                        <input type="password" placeholder=" * * * * * * * * "/>
                    </div>
                    <div className="visible">
                        <img src={eyeIcon} alt="" />
                    </div>
                </div>
                
            </div>

            <div className="login-wraper">
                <div className="remember">
                    <div className="left-b">
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </div>
                    <div className="right-b">
                        <a>Forgot Password?</a>
                    </div>
                </div>
                
                <Link to="/home">
                    <button className='login-btn'>Login</button>
                </Link>
                

                <div className="register">
                    <p>Don't have an account? <a>Register</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;