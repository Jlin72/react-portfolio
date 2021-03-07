import React from 'react';

const SocialMedia = () => {
  return(
    <div className="card socialMediaCard Cardbackground">
      <div className="card-body">
        <h5 className='card-title' style={{borderBottom: '1px solid black'}}>Find me on social media</h5>
        <a href="https://www.linkedin.com/in/jhonny-lin-weng" target="_blank" rel='noreferrer'><i style={{fontSize: '24px'}} className="fa">&#xf08c;</i></a>
        <a href="https://www.facebook.com/jhonnylin96/" target="_blank" rel='noreferrer'><i style={{fontSize: '24px'}} className="fa">&#xf09a;</i></a>
        <a href="https://github.com/Jlin72" target="_blank" rel='noreferrer'><i style={{fontSize: '24px'}} className="fa">&#xf09b;</i></a>
      </div>
    </div>
  )
}

export default SocialMedia;