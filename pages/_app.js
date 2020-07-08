import React from 'react';
import '../styles.css'

import Footer from '../components/Footer';
import Header from '../components/Header';


const MyApp = ({Component, pageProps}) => {
  return (
    <div>
      <Header />
      <div className= 'container mx-auto'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>  
  )

}

export default MyApp;
