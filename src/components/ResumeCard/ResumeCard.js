import React, {useContext, useState} from 'react';
import indexContext from '../../Util/IndexContext';
import { Modal, Carousel, Button }  from 'react-bootstrap';

const ResumeCard = () => {

  const {resumePDFSrc, resumeIMGSrc} = useContext(indexContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div style={{marginTop: '15px'}}>
      <div className='card Cardbackground'>
        <img src={resumeIMGSrc} className='card-img-top' alt='Resume' onClick={handleShow} />
        <div className='card-body'>
          <h5 className='card-title' style={{borderBottom: '1px solid black'}}>Resume</h5>
          <p className="card-text">Click on the image to see the complete resume or click on download to download it</p>
          <a href={resumePDFSrc} download className="btn btn-primary">Download</a>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Resume
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Carousel classItem='carousel-dark slide'>
              <Carousel.Item>
                <img className='d-block w-100' src='/img/Resume_screenshot1.png' alt='Resume first page' />
              </Carousel.Item>
              <Carousel.Item>
                <img className='d-block w-100' src='/img/Resume_screenshot2.png' alt='Resume second page' />
              </Carousel.Item>
            </Carousel>
        </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>Close</Button>
            <a href={resumePDFSrc} download><Button variant='primary'>Download</Button></a>
          </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ResumeCard;