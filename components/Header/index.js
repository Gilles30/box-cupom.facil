import React from 'react';
import Link from 'next/link';
import './styles.css';

const Header = () => {
  return (
    <React.Fragment>
      <div className = 'bg-teal-200 p-2 shadow-md z-50'>
        <div className= 'container mx-auto'>
          <img className= 'mx-auto' src='/logo.png' alt= 'box-cupom.facil' />
        </div>
      </div>
      <div className= 'bg-green-300 p-4 shadow-md text-center'>
        <Link href= './about'>
          <a className= 'px-2 hover:underline'>Sobre</a>
        </Link>
        <Link href= './contact'>
          <a className= 'px-2 hover:underline'>Contato</a>
        </Link>
        <Link href= './search'>
          <a className= 'px-2 hover:underline'>Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Header;