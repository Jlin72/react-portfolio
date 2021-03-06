import React from 'react';
import AboutCard from '../AboutCard/AboutCard';
import ResumeCard from '../ResumeCard/ResumeCard';
import SocialMedia from '../SocialMedia/SocialMedia';

const About = () => {
  return(
    <article className="row">
      <div className='col-md-9'>
        <AboutCard />
      </div>
      <div className="col-md-3">
        <ResumeCard />
        <SocialMedia />
      </div>
    </article>
  )
}

export default About;