import React from 'react';
import Link from 'next/link';
import './styles.css';


const Footer = () => {
  return (
    <React.Fragment>
      <div className = 'bg-green-300 p-2 shadow-md text-center font-bold'>
        <div className= 'container mx-auto'>
          Projeto desenvolvido por: 
          <Link href= 'https://lorison-gilles.netlify.app/'>
            <a className= 'px-2 hover:underline'>Lorison Gilles /</a>
          </Link>
        </div>
      </div>
      <div className= 'bg-teal-200 p-4 shadow-md text-center'>
        <img className= 'mx-auto' src='/logo.coffee.png' alt= 'CoffeeBeam' />
      </div>
    </React.Fragment>
  )
}

export default Footer;