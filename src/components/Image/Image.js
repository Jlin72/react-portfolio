import React, {useContext} from 'react';
import IndexContext from '../../Util/IndexContext';
import './style.css'

const Image = () => {
  const {src, alt, className} = useContext(IndexContext);

  return (
    <div>
      <img src={src} alt={alt} className={className}  />
    </div>
  )
}

export default Image;