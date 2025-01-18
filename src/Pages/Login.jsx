import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import logImg from "../assets/images/Illustration.png";
import googleIcon from "../assets/icons/Frame 1116607310.png";
import facebookIcon from "../assets/icons/Vector.png";
import accIcon from "../assets/icons/account_circle.png";
import mailIcon from "../assets/icons/mail.png";
import keyIcon from "../assets/icons/key.png";
import eyeIcon from "../assets/icons/visibility.png";
import "../Styles/Login.css";

const Login = () => {
    const [name, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPassword] = useState('');
    const [nameError, setError] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
    
        const errorMessage = validation(name, email, pwd);
        if (errorMessage) {
            setError(errorMessage);
            return;
        }
    
        const loginData = {
            username: name,
            password: pwd,
            email: email,
            expiresInMins: 30,
        }

        console.log(loginData);

        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || 'Login failed. Please try again.');
                return;
            }

            // console.log(response);

            const data = await response.json();

            console.log(data);
            // console.log("LocalStorage before:", localStorage);

            localStorage.setItem('authToken', data.token);
            localStorage.setItem('userData', JSON.stringify(data));
            localStorage.setItem('isAuthenticated', 'true');

            console.log("LocalStorage after:", localStorage);
            
            navigate('/home');
        } 
        catch (error) {
            setError('An error occurred while logging in. Please try again.');
        }
    }

    const validation = (username, email, password) => {
        if (username != 'emilys') {
            return 'Username is invalid.';
        }

        else if (!validator.isEmail(email)) {
            return 'Invalid email format.';
        }

        else if (password.length < 8) {
            return 'Password must be at least 8 characters long.';
        }

        return '';
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    return (
        <div className="page-wrapper">
            <div className="left-sec">
                <img src={logImg} alt="banner" />
            </div>
            <div className="right-sec">
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
                            <p>Login with Facebook</p>
                        </button>
                    </div>
                </div>

                <div className="or-sec">
                    <div className="line"></div>
                    <div className="or">or</div>
                    <div className="line"></div>
                </div>

                <form className="manual-sign" onSubmit={handleLogin}>
                    <div className="in-wrapper">
                        <div className="acc">
                            <img src={accIcon} alt="account icon" />
                        </div>
                        <div className="name">
                            <label>Username</label>
                            <input type="text" onChange={(e) => setUsername(e.target.value)} value={name} placeholder="username" required />
                        </div>
                    </div>

                    <div className="in-wrapper">
                        <div className="mail">
                            <img src={mailIcon} alt="mail icon" />
                        </div>
                        <div className="name">
                            <label>Email</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="username@gmail.com" required />
                        </div>
                    </div>

                    <div className="in-wrapper">
                        <div className="key">
                            <img src={keyIcon} alt="key icon" />
                        </div>
                        <div className="name">
                            <label>Password</label>
                            <input type={isPasswordVisible ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} value={pwd} placeholder="********" required />
                        </div>
                        <div className="visible" onClick={togglePasswordVisibility}>
                            <img src={eyeIcon} alt="visibility toggle" />
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

                        {nameError && <span className="err-msg">{nameError}</span>}
                        <button className="login-btn" type="submit">Login</button>

                        <div className="register">
                            <p>Don't have an account? <a>Register</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;