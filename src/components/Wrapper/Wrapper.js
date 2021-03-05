import React from 'react';
import Navbar from '../Navbar';

const Wrapper = ({children}) => {
  return(
    <div>
      <Navbar />
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default Wrapper;