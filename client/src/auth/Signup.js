import React, { useState } from 'react'
import Layout from './../layouts/Layout';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';
import { GoEye, GoEyeClosed, GoShieldLock } from 'react-icons/go';
import axios from 'axios';


const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  // handle SignUp Submit Function
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(name, email, password);

    try {
      const res = await axios.post(
        `/api/v1/auth/signup`, 
        {name, email, password}
      );

      if (res?.data?.success){
        alert(`${res.data.message}`);
        navigate('/login');
      } else {
        alert(`${res.error.message}`);
      }
      
    } catch (error) {
      console.log(error);
      alert('something went wrong!');
    }
  }

  // toggle Display Password Function
  const toggleShowPassword = async (event) => {
    setShowPassword(!showPassword);
  }

  
  return (
    <Layout 
      title='PackaBox - Sign Up'
      description='Join PackaBox, your ultimate destination for ecommerce solutions. Sign up today to explore a world of premium products, seamless shopping experiences, and exclusive offers. Start shopping smarter with PackaBox!'
      keywords='PackaBox ecommerce sign up, online shopping sign up, ecommerce account registration, exclusive ecommerce offers,  secure online shopping, premium ecommerce products, ecommerce membership benefits, start shopping online, ecommerce deals and discounts,join PackaBox ecommerce'
    >
      <section className='signup'>
        <div className='form-header signup-header'>
          <h1 className='title'>Join us today!</h1>
          <h2 className='subtitle'><GoShieldLock /> Sign Up to create your account!</h2>
        </div>

        <form onSubmit={handleSubmit} className='form-main signup-form'>

          <div className='input-field'>
            <label htmlFor="name"> Name:</label><br/>
            <input type="text" id='name' name="name"
              placeholder='Your Name' 
              value={name}
              onChange={(event)=> setName(event.target.value)}
              // required
            />
          </div>

          <div className='input-field'>
            <label htmlFor="email"> Email:</label><br/>
            <input type="email" id='email' name="email"
              placeholder='you@example.com' 
              value={email}
              onChange={(event)=> setEmail(event.target.value)}
              // required
            />
          </div>

          <div className='input-field'>
            <label htmlFor="password">Password:</label><br/>
            <input type={showPassword?'text':'password'} name="password"
              placeholder='Your Password' 
              value={password}
              onChange={(event)=> setPassword(event.target.value)}
              // required
            />
            <span className='password-icon' onClick={toggleShowPassword}>
              {showPassword? <GoEye />:<GoEyeClosed />}
            </span>
          </div>

          <div className='input-button'>
            <button className='button signup-btn' type='submit'>Sign Up</button>
          </div>

        </form>

        <div className='form-footer auth-text'>
          <p>Already have an account? <Link className='auth-link' to='/login'>Log In</Link></p>
        </div>

      </section>
    </Layout>
  );
};

export default Signup;