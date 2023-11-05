import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {dependencies} from '../../Tools/dependencies'
import text from './text.json'
import 'animate.css';
import './ContactUs.scss'

function ContactUs() {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  return (
    <div className='contact_us_container'>
      <Container> 
        <Row>
          <Col lg={4}>
            <div className='box animate__animated animate__rollIn'>
              <p>
                <div className='icon'>
                  <i className="fa fa-map-marker-alt"></i> 
                </div>
                {Text.address}
                <span>{Text.location}</span>
              </p>
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
    </div>
  )
}

export default ContactUs
