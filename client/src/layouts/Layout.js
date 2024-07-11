import React from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = ({children}) => {
  return (
    <>
        <header className='layout'>
          <Header/>
        </header>
        <main className='layout'>
          {children}
        </main>
        <footer className='layout'>
          <Footer/>
        </footer>
    </>
  );
};

export default Layout;