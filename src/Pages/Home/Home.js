import React from 'react'
import { Row, Col, Container } from 'reactstrap';
import {dependencies} from '../../Tools/dependencies'
import text from './text.json'
import background from '../../assets/images/home_background.jpg'
import medical_background from '../../assets/images/auris_health.webp'
import './Home.scss'

function Home() {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  const renderBody = () => (
    <div className='home_container'>
      <div className='header'>
        <div className='overlay'></div>
        <p>{Text.description}</p>
      </div>
      <div className='work_scope'>
        <Container>
          <h2>{Text.work_scope}</h2>
          <Row>
            {Text.work_scope_arr.map((ele, index)=>(
              <Col lg={3} md={4} sm={12} key={index}>
                <a href='/' className='scope'>
                  <i class={ele.icon}></i>
                  <p >{ele.title}</p>
                </a>
              </Col>
              ))}
            </Row>
          </Container>
      </div>
      {/* company brief */}
      <div className='company_brief'>
        <img src={medical_background} alt="Medical Background" />
        <div className='brief'>
          <span>THE COMPANY IN BRIEF</span>
          <h3>TO BE THE LEADING SAUDI COMPANY IN PROVIDING THE LATEST HEALTHCARE SERVICES, MEDICAL AND NON-MEDICAL OPERATION AND MAINTENANCE</h3>
          <h5>Based on the successes achieved by the founder Sheikh / Saud Muhammad Nasser Al-Arifi, by launching the House of Medical and Scientific Equipment as a sole proprietorship in 1979 in the city of Riyadh, his project was transformed into a limited liability company in 2000 with a capital of 20 million Saudis, and then into a company Closed shareholding on 2016 with a gradual ascending capital increase to currently amounting to 200 million Saudi riyals. The company has achieved many major achievements, consolidating its leadership position in the Saudi market, based on an ambitious strategic vision, through which it seeks to provide a wide range of quality solutions and services according to the highest standards of efficiency, quality and proficiency.</h5>
        </div>
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
