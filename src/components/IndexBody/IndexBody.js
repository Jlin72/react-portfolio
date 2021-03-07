import React, {useState} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import IndexContext from '../../Util/IndexContext';
import About from '../About/About';

const IndexBody = () => {

  let resumeSrc = process.env.PUBLIC_URL + '/Resume.pdf';

  //eslint-disable-next-line
  const [indexInfo, setIndexInfo] = useState({
    src: process.env.PUBLIC_URL+'/img/profile.jpg',
    alt: 'profile picture',
    className: 'indexImg',
    resumePDFSrc: resumeSrc,
    resumeIMGSrc: process.env.PUBLIC_URL+'/img/Resume.jpg'
  })

  return(
    <div style={{marginBottom: '5%'}}>
      <Wrapper>
        <IndexContext.Provider value={indexInfo} >
          <About />
        </IndexContext.Provider>
      </Wrapper>
    </div>
  );
}

export default IndexBody;