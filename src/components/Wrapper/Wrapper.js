import React from 'react';

const Wrapper = ({children}) => {
  return(
    <article className="container wrapper">
        {children}
    </article>
  )
}

export default Wrapper;