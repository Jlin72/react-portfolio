import React, {useState} from 'react';
import {Card, Modal} from 'react-bootstrap';

const Project = ({src1, alt1, src2, alt2, title1, title2, description1, description2, repository1, repository2, deployed1, deployed2}) => {
  const [show1, setShow1] = useState(false);

  const handleClose1 = ()  => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = ()  => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return(
    <div>
      <div className='col-md-6' style={{marginBottom: '20px'}}>
        <Card style={{width: '14rem', marginTop:'5px'}} className='portfolioCard'>
          <Card.Img variant='top' src={src1} alt={alt1} onClick={handleShow1} style={{width: '100%', height: '250px', borderBottom: '1px solid black'}} />
          <Card.Body>
            <Card.Title>{title1}</Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className='col-md-6'>
        <Card style={{width: '14rem', marginTop:'5px'}} className='portfolioCard'>
          <Card.Img variant='top' src={src2} alt={alt2} onClick={handleShow2} style={{width: '100%', height: '250px', borderBottom: '1px solid black'}} />
          <Card.Body>
            <Card.Title>{title2}</Card.Title>
          </Card.Body>
        </Card>
      </div>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>{title1}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img style={{width: '100%', height: 'auto'}} src={src1} alt={alt1} />
          <p>{description1}</p>
        </Modal.Body>
        <Modal.Footer>
          <a href={repository1} target="_blank" rel='noreferrer'><button className='btn btn-primary'>Repository</button></a>
          <a href={deployed1} target="_blank" rel='noreferrer'><button className='btn btn-primary'>Deployed application</button></a>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>{title2}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img style={{width: '100%', height: 'auto%'}} src={src2} alt={alt2} />
          <p>{description2}</p>
        </Modal.Body>
        <Modal.Footer>
          <a href={repository2} target="_blank" rel='noreferrer'><button className='btn btn-primary'>Repository</button></a>
          <a href={deployed2} target="_blank" rel='noreferrer'><button className='btn btn-primary'>Deployed application</button></a>
        </Modal.Footer>
      </Modal>        
    </div>
    
  )
  
}

export default Project;