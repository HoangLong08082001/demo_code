import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

export default function LayoutDefault({children}) {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer/>
    </div>
  );
}
