import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {dependencies} from '../../Tools/dependencies'
import text from './text.json'
import './ContactUs.scss'

function ContactUs() {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  return (
    <div className='contact_us_container'>
      <Container> 
        <Row>
          <Col lg={4}>
            <div className='box'>
              <p>
                <div className='icon'>
                  <i class="fa fa-map-marker-alt"></i> 
                </div>
                {Text.address}
                <span>{Text.location}</span>
              </p>
            </div>
          </Col>
          <Col lg={4}>
            <div className='box'>
              <a href="tel:+966 (11)4646699">
                <div className='icon'>
                  <i class="fa fa-phone"></i> 
                </div>
                {Text.phone}
                <span>+966 (11)4646699</span>
              </a>
            </div>
          </Col>
          <Col lg={4}>
            <div className='box'>
              <a href="mailto:smeh@smeh.com.sa">
                <div className='icon'>
                  <i class="fa fa-envelope"></i> 
                </div>
                {Text.email}
                <span>smeh@smeh.com.sa</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactUs
