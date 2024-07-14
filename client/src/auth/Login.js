import React, { useState } from 'react';
import Layout from './../layouts/Layout';
import './auth.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoEye, GoEyeClosed, GoShieldCheck } from 'react-icons/go';
import axios from 'axios';
import { useAuth } from '../context/auth';


const Login = () => {

  const [auth, setAuth] = useAuth();
  const [email,setEmail] = useState('sudarshanshelke@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  // handle submit function
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
    
    try {
      const res = await axios.post(
        `/api/v1/auth/login`, 
        {email, password}
      );

      if (res.data.success){
        alert(`${res.data.message}`);
        // set User data to Auth Context
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        // Save Auth Context in Local Storage
        localStorage.setItem('auth', JSON.stringify(res.data));
        navigate(location.state || '/');

      } else {
        alert(`${res.data.message}`);
      }
      
    } catch (error) {
      console.log(error);
      alert('something went wrong');
    }
  }

  // toggle Display Password Function
  const toggleShowPassword = async (event) => {
    setShowPassword(!showPassword);
  }


  return (
    <Layout
      title='PackaBox - Log In'
      description='Log in to PackaBox, your go-to ecommerce platform, for a personalized shopping experience. Access your account to track orders, manage preferences, and enjoy exclusive deals. Sign in now to get started!'
      keywords='PackaBox ecommerce login, online shopping login, ecommerce account access, secure ecommerce login, log in to PackaBox, manage ecommerce orders, PackaBox sign in, ecommerce account login, track orders online, exclusive ecommerce deals login, ecommerce deals and discounts, join PackaBox ecommerce'
    >
      <section className='auth login'>
        <div className='form-header login-header'>
          <h1 className='title'>Welcome back!</h1>
          <h2 className='subtitle'><GoShieldCheck /> Log In to access your account!</h2>
        </div>

        <form onSubmit={ handleSubmit } className='form-main login-form'>
          <div className='input-field'>
            <label htmlFor="email"> Email:</label><br />
            <input type="email" id='email' name="email"
              placeholder='you@example.com' 
              value={email}
              onChange={(event)=> setEmail(event.target.value)}
              required
            />
          </div>

          <div className='input-field'>
            <label htmlFor="password">Password:</label><br/>
            <input type={showPassword?'text':'password'} name="password"
              placeholder='Your Password' 
              value={password}
              onChange={(event)=> setPassword(event.target.value)}
              required
            />
            <span className='password-icon' onClick={toggleShowPassword}>
              {showPassword? <GoEye />:<GoEyeClosed />}
            </span>
          </div>

          <div>
            <p className='forgot'><Link className='forgot-link' to='/forgot'>Forgot Password</Link></p>
          </div>

          <div className='input-button'>
            <button className='button login-btn' type='submit'>Log In</button>
          </div>
        </form>

        <div className='form-footer auth-text'>
          <p>Don't have an account? <Link className='auth-link' to='/signup'>Sign Up</Link></p>
        </div>

      </section>
    </Layout>
  );
};

export default Login;