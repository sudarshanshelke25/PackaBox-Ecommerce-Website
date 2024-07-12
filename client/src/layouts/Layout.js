import React from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = ({children}) => {
  return (
    <>
        <header className='layout header-layout'>
          <Header/>
        </header>
        <main className='layout main-layout'>
          {children}
        </main>
        <footer className='layout footer-layout'>
          <Footer/>
        </footer>
    </>
  );
};

export default Layout;