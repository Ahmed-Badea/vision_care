import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {dependencies} from '../../Tools/dependencies'
import text from './text.json'
import './../ContactUs/ContactUs.scss'

function Recruitment() {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  const renderBody = () => (
    <Container> 
      <Row>
        <Col lg={4}>
          <div className='box animate__animated animate__rollIn'>
            <div className='icon'>
              <i className="fa fa-linkedin"></i> 
            </div>
            <p>{Text.linkedin}</p>
            <a href="https://www.linkedin.com/in/talent-vision-care-34888829a/">
              <span>Talent Vision Care</span>
            </a>
          </div>
        </Col>
        <Col lg={4}>
          <div className='box animate__animated animate__rollIn'>
            <div className='icon'>
              <i className="fa fa-phone"></i> 
            </div>
            <p>{Text.phone}</p>
            <a href="tel:+966 11 207 9919">
              <span>+966 11 207 9919</span>
            </a>
          </div>
        </Col>
        <Col lg={4}>
          <div className='box animate__animated animate__rollIn'>
            <div className='icon'>
              <i className="fa fa-envelope"></i> 
            </div>
            <p>{Text.email}</p>
            <a href="mailto:info@visioncareksa.com">
              <span>info@visioncareksa.com</span>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )

  return (
    <div className='contact_us_container'>
      {renderBody()}
    </div>
  )
}

export default Recruitment
