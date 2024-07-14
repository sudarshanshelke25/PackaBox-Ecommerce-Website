import React, { useEffect, useState } from 'react';
import './loader.css';
import { useLocation, useNavigate } from 'react-router-dom';

const BoxLoader = () => {
    const [count, setCount] =useState(6);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(( ) => {
            setCount((prevValue) => --prevValue)
        }, 1000);

        count === 0 && navigate('/login',{
            state: location.pathname,
        });
        return () => clearInterval(interval);

    }, [count, navigate, location]);

  return (
    <>
        <div className="container">
            <div className="cube-wrapper">
                <div className="cube">
                    <div className="sides">
                    <div className="top" />
                    <div className="right" />
                    <div className="bottom" />
                    <div className="left" />
                    <div className="front" />
                    <div className="back" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BoxLoader;