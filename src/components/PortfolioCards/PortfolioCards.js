import React from 'react';
import {Card} from 'react-bootstrap';
import ImageCard from '../imageCard/ImageCard';

const PortfolioCards = () => {
  return(
    <div className='row'>
      <Card>
        <Card.Title>Portfolio</Card.Title>
        <Card.Body>
          <h5>Click on the images to get more information about the project</h5>
          <br />
          <div className='row'>
            <ImageCard description1='yo' description2='no' />
            <ImageCard description1='po' description2='so' />
            <ImageCard description1='yo' description2='no' />
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PortfolioCards;