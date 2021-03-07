import React from 'react';
import {Card} from 'react-bootstrap'

const ContactBody = () => {
  return (
    <article className='contactform'>
      <Card className='Cardbackground'>
          <Card.Header>
            <Card.Title >Contact me</Card.Title>
          </Card.Header>
          <Card.Body>
            <form>
              <div className='mb-3'>
                <label for='name' className='form-label'>Name:</label>
                <input type='text' className='form-control' id='name' placeholder='Enter your name' />
              </div>
              <div className='mb-3'>
                <label for='message' className='form-label'>Message:</label>
                <textarea type='text' className='form-control' id='message' placeholder='Enter your message here'></textarea>
              </div>
              <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
          </Card.Body>
      </Card>
    </article>
  )
}

export default ContactBody;