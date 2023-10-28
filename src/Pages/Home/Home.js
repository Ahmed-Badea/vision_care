import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'reactstrap';
import {dependencies} from '../../Tools/dependencies'
import CompanyBriefImage from '../../assets/images/company_brief.png'
import text from './text.json'
import './Home.scss'

function Home() {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  const [show, setShow] = useState(false);
  useEffect(() => {
    // Use a setTimeout to delay the animation
    const timeout = setTimeout(() => {
      setShow(true);
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  const renderBody = () => (
    <div className='home_container'>
      <div className='header'>
        <div className='overlay'></div>
        <p className={`slide-in ${show ? 'active' : ''}`}>{Text.description}</p>
      </div>
      {/* Work Scope */}
      <div className='work_scope'>
        <Container>
          <Row>
            <Col lg={6}>
              <h6>{Text.services}</h6>
              <h2>{Text.work_scope}</h2>
            </Col>
            <Col lg={6}>
              <p>{Text.work_scope_description}</p>
            </Col>
            <Col lg={12}>
              <Row>
                <h3>{Text.consumables}</h3>
                {Text.consumables_arr.map((ele, index)=>(
                  <Col lg={3} md={4} sm={12} key={index}>
                    <a href='/' className='scope'>
                      <i class={ele.icon}></i>
                      <p >{ele.title}</p>
                    </a>
                  </Col>
                  ))}
              </Row>
            </Col>
            <hr/>
            <Col lg={12}>
              <Row>
                <h3>{Text.devices}</h3>
                {Text.devices_arr.map((ele, index)=>(
                  <Col lg={3} md={4} sm={12} key={index}>
                    <a href='/' className='scope'>
                      <i class={ele.icon}></i>
                      <p >{ele.title}</p>
                    </a>
                  </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Company Brief */}
      <div className='company_brief'>
        <Row>
            <Col lg={6}>
              <img src={CompanyBriefImage} alt="Medical Background" />
            </Col>
            <Col lg={6}>
              <div className='brief'>
                <span>{Text.company_brief}</span>
                <h3>{Text.company_brief_title}</h3>
                <h5>{Text.company_brief_description}</h5>
              </div>
            </Col>
        </Row>
      </div>
      <div className='contact_us'>
      </div>
    </div>
  )

  return (
    <div>
      {renderBody()}
    </div>
  )
}

export default Home
