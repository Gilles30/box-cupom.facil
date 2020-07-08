import React from 'react';
import Link from 'next/link';
import './styles.css';

const About= () => {
  return (
    <div>
      <h1>Olá Sobre</h1>
      <div>
        <Link href= '/'> 
          <a>Home</a> 
        </Link>
      </div>
    </div>
  )
}

export default About;