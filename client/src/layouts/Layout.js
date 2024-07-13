import React from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
import {Helmet} from "react-helmet";

const Layout = ({children, title, description, keywords, author }) => {
  return (
    <>
        <Helmet>
          <title>{title}</title>
          <meta charSet="UTF-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
        </Helmet>
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
  
  Layout.defaultProps = {
    title: 'PackaBox - Ecommerce Website',
    description: 'PackaBox is a full-featured e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This project showcases a modern, responsive, and user-friendly shopping platform',
    keywords: 'packabox ecommerce website, packabox, packbox, pack, box, ecommerce, ecommerce website, ecommerce website, ecommerce platforms, ecommerce platform, best ecommerce platform, ecommerce seo, ecommerce store, ecommerce business, ecommerce trends, ecommerce solutions,ecommerce online store, ecommerce site, ecommerce sites, ecommerce web, ecommerce b2b',
    author: 'Sudarshan Shelke'
  }
};

export default Layout;