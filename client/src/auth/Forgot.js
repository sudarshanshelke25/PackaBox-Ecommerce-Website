import React, { useState } from 'react'
import Layout from './../layouts/Layout';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';
import { GoEye, GoEyeClosed, GoShield } from 'react-icons/go';
import axios from 'axios';


const Forgot = () => {

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  // handle SignUp Submit Function
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, newPassword, confirmPassword);

    try {
      const res = await axios.post(
        `/api/v1/auth/forgot-password`, 
        {email, newPassword, confirmPassword}
      );

      if (res?.data?.success){
        alert(`${res.data.message}`);
        navigate('/login');
      } else {
        alert(`${res.data.message}`);
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
      title='PackaBox - Forgot Password'
      description='Forgot your PackaBox password? Easily reset your password and regain access to your account. Follow our simple steps to secure your account and continue shopping on PackaBox, your trusted e-commerce platform.'
      keywords='PackaBox forgot password, ecommerce password reset, PackaBox account recovery, reset PackaBox password, recover ecommerce password, PackaBox password help, secure password reset, ecommerce login issues, forgot password solution,retrieve PackaBox account'
    >
      <section className='auth signup'>
        <div className='form-header signup-header'>
          <h1 className='title'>Forgot password?</h1>
          <h2 className='subtitle'><GoShield /> Enter your email to reset account!</h2>
        </div>

        <form onSubmit={handleSubmit} className='form-main signup-form'>

          <div className='input-field'>
            <label htmlFor="email"> Email:</label><br/>
            <input type="email" id='email' name="email"
              placeholder='you@example.com' 
              value={email}
              onChange={(event)=> setEmail(event.target.value)}
              required
            />
          </div>

          <div className='input-field'>
            <label htmlFor="newPassword">Password:</label><br/>
            <input type={showPassword?'text':'password'} id="newPassword" name="newPassword"
              placeholder='Your Password' 
              value={newPassword}
              onChange={(event)=> setNewPassword(event.target.value)}
              required
            />
            <span className='password-icon' onClick={toggleShowPassword}>
              {showPassword? <GoEye />:<GoEyeClosed />}
            </span>
          </div>

          <div className='input-field'>
            <label htmlFor="confirmPassword">Confirm:</label><br/>
            <input type={showPassword?'text':'password'} id="confirmPassword" name="confirmPassword"
              placeholder='
              Confirm Password' 
              value={confirmPassword}
              onChange={(event)=> setConfirmPassword(event.target.value)}
              required
            />
            <span className='password-icon' onClick={toggleShowPassword}>
              {showPassword? <GoEye />:<GoEyeClosed />}
            </span>
          </div>

          <div className='input-button'>
            <button className='button signup-btn' type='submit'>Submit</button>
          </div>

        </form>

        <div className='form-footer auth-text'>
          <p>Cancel Forgot Password ? <Link className='auth-link' to='/login'>Cancel</Link></p>
        </div>

      </section>
    </Layout>
  );
};

export default Forgot;