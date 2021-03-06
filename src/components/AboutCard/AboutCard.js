import React from 'react';
import Image from '../Image/Image';

const AboutCard = () => {
  return (
    <div className="card aboutCard">
          <div className="card-body">
            <h3 className="AboutTitle card-title">About me </h3> 
            <div className="row">
              <div className='col-md-6'>
                <Image />
              </div>
                <p className="col-md-6 AboutText card-text">Hello, nice to meet you and welcome to my online portfolio,

                  My name is Jhonny Lin and I was born in Ecuador on 1996. I am a graduate from the University of Toronto with a degree on Anthropology. Currently, I am working as an archaeologists. In addition, I am also learning full stack web development from University of Toronto school of continuing studies. On this web portfolio you will be able to see some of the work I have done while I was a student of full stack web development.
                  If you are interested in checking some of the things I have done feel free to click on the portfolio tab. If my work has caught your eye feel free to check my resume, and contacting me. You can try contacting me by sending me an email to <a href='mailto: jhonnylin72@gmail.com' className='Email'>jhonnylin72@gmail.com</a> or contact me at: <span className='Phone'>  +1-289-952-3542</span>. In addition, you can check my linkedin profile!
                </p>
            </div>
          </div>
    </div>
  )
}

export default AboutCard;