import React from 'react';
import Navbar from '../Navbar/Navbar';

const Wrapper = ({children}) => {
  return(
    <article className="container wrapper">
        {children}
    </article>
  )
}

export default Wrapper;