import React from 'react';
import Navbar from '../Navbar/Navbar';

const Wrapper = ({children}) => {
  return(
    <div className="container">
        {children}
    </div>
  )
}

export default Wrapper;