import React from 'react';
import Link from 'next/link';
import './styles.css';

const Contact= () => {
  return (
  <div>
    <h1>Contatos</h1>
    <div>
      <Link href= '/'>
        <a>Home</a>
      </Link>
    </div>
  </div>


  )
}

export default Contact;